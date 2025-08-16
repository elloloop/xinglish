#!/bin/bash

# Issue Tracker Script for Xinglish Project
# Usage: ./scripts/issue-tracker.sh [command] [issue_number]

ISSUES_DIR="issues"
TEMPLATE_FILE="$ISSUES_DIR/ISSUE_TEMPLATE.md"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to show usage
show_usage() {
    echo "Usage: $0 [command] [issue_number]"
    echo ""
    echo "Commands:"
    echo "  list                    - List all issues with status"
    echo "  status [issue_number]   - Show status of specific issue"
    echo "  start [issue_number]    - Mark issue as IN PROGRESS"
    echo "  review [issue_number]   - Mark issue as REVIEW NEEDED"
    echo "  complete [issue_number] - Mark issue as COMPLETED"
    echo "  block [issue_number]    - Mark issue as BLOCKED"
    echo "  create [issue_number]   - Create new issue from template"
    echo "  help                    - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 list"
    echo "  $0 status 1"
    echo "  $0 start 1"
    echo "  $0 complete 1"
}

# Function to list all issues
list_issues() {
    echo -e "${BLUE}📋 Xinglish Issues Status${NC}"
    echo "=================================="
    echo ""

    for file in "$ISSUES_DIR"/[0-9]*.md; do
        if [ -f "$file" ]; then
            issue_num=$(basename "$file" .md | sed 's/^0*//' | sed 's/-.*$//')
            title=$(grep "^# Issue #" "$file" | head -1 | sed 's/^# Issue #[0-9]*: //')
            status=$(grep "Status:" "$file" | head -1 | sed 's/.*Status: //')
            priority=$(grep "Priority:" "$file" | head -1 | sed 's/.*Priority: //')

            echo -e "Issue #$issue_num: $title"
            echo -e "  Status: $status"
            echo -e "  Priority: $priority"
            echo ""
        fi
    done
}

# Function to show issue status
show_status() {
    local issue_num=$1
    local file="$ISSUES_DIR/$(printf "%02d" $issue_num)-*.md"

    # Find the actual file
    local actual_file=$(ls $file 2>/dev/null | head -1)

    if [ -z "$actual_file" ] || [ ! -f "$actual_file" ]; then
        echo -e "${RED}❌ Issue #$issue_num not found${NC}"
        exit 1
    fi

    echo -e "${BLUE}📋 Issue #$issue_num Status${NC}"
    echo "=========================="
    echo ""

    # Extract key information
    title=$(grep "^# Issue #" "$actual_file" | head -1 | sed 's/^# Issue #[0-9]*: //')
    status=$(grep "Status:" "$actual_file" | head -1 | sed 's/.*Status: //')
    priority=$(grep "Priority:" "$actual_file" | head -1 | sed 's/.*Priority: //')
    assignee=$(grep "Assignee:" "$actual_file" | head -1 | sed 's/.*Assignee: //')
    target=$(grep "Target Completion:" "$actual_file" | head -1 | sed 's/.*Target Completion: //')

    echo "Title: $title"
    echo "Status: $status"
    echo "Priority: $priority"
    echo "Assignee: $assignee"
    echo "Target Completion: $target"
    echo ""

    # Show status tracking
    echo "Status Tracking:"
    grep -A 5 "## Status Tracking" "$actual_file" | grep -E "\[ \]|\[x\]" | while read line; do
        if [[ $line == *"[x]"* ]]; then
            echo -e "  ${GREEN}✅ $line${NC}"
        else
            echo -e "  ${YELLOW}⭕ $line${NC}"
        fi
    done
}

# Function to update issue status
update_status() {
    local issue_num=$1
    local new_status=$2
    local file="$ISSUES_DIR/$(printf "%02d" $issue_num)-*.md"

    # Find the actual file
    local actual_file=$(ls $file 2>/dev/null | head -1)

    if [ -z "$actual_file" ] || [ ! -f "$actual_file" ]; then
        echo -e "${RED}❌ Issue #$issue_num not found${NC}"
        exit 1
    fi

    # Update status line
    sed -i.bak "s/Status: .*/Status: $new_status/" "$actual_file"

    # Update status tracking checkboxes
    case $new_status in
        "🟡 IN PROGRESS")
            sed -i.bak "s/\[ \] 🔴 NOT STARTED/[x] 🔴 NOT STARTED/" "$actual_file"
            sed -i.bak "s/\[ \] 🟡 IN PROGRESS/[x] 🟡 IN PROGRESS/" "$actual_file"
            ;;
        "🟢 REVIEW NEEDED")
            sed -i.bak "s/\[ \] 🟡 IN PROGRESS/[x] 🟡 IN PROGRESS/" "$actual_file"
            sed -i.bak "s/\[ \] 🟢 REVIEW NEEDED/[x] 🟢 REVIEW NEEDED/" "$actual_file"
            ;;
        "✅ COMPLETED")
            sed -i.bak "s/\[ \] 🟢 REVIEW NEEDED/[x] 🟢 REVIEW NEEDED/" "$actual_file"
            sed -i.bak "s/\[ \] ✅ COMPLETED/[x] ✅ COMPLETED/" "$actual_file"
            ;;
        "❌ BLOCKED")
            sed -i.bak "s/\[ \] 🟡 IN PROGRESS/[x] 🟡 IN PROGRESS/" "$actual_file"
            sed -i.bak "s/\[ \] ❌ BLOCKED/[x] ❌ BLOCKED/" "$actual_file"
            ;;
    esac

    # Add to status history
    current_date=$(date +%Y-%m-%d)
    sed -i.bak "/^**Status History**:/a- $current_date $new_status - Status updated via script" "$actual_file"

    # Clean up backup files
    rm -f "$file.bak"

    echo -e "${GREEN}✅ Issue #$issue_num status updated to: $new_status${NC}"
}

# Function to create new issue
create_issue() {
    local issue_num=$1
    local file="$ISSUES_DIR/${issue_num}.md"

    if [ -f "$file" ]; then
        echo -e "${RED}❌ Issue #$issue_num already exists${NC}"
        exit 1
    fi

    if [ ! -f "$TEMPLATE_FILE" ]; then
        echo -e "${RED}❌ Template file not found${NC}"
        exit 1
    fi

    # Copy template and update issue number
    cp "$TEMPLATE_FILE" "$file"
    sed -i.bak "s/\[NUMBER\]/$issue_num/g" "$file"
    sed -i.bak "s/\[DATE\]/$(date +%Y-%m-%d)/g" "$file"
    rm -f "$file.bak"

    echo -e "${GREEN}✅ Issue #$issue_num created from template${NC}"
    echo -e "Edit $file to add issue details"
}

# Main script logic
case "$1" in
    "list")
        list_issues
        ;;
    "status")
        if [ -z "$2" ]; then
            echo -e "${RED}❌ Please provide issue number${NC}"
            show_usage
            exit 1
        fi
        show_status "$2"
        ;;
    "start")
        if [ -z "$2" ]; then
            echo -e "${RED}❌ Please provide issue number${NC}"
            show_usage
            exit 1
        fi
        update_status "$2" "🟡 IN PROGRESS"
        ;;
    "review")
        if [ -z "$2" ]; then
            echo -e "${RED}❌ Please provide issue number${NC}"
            show_usage
            exit 1
        fi
        update_status "$2" "🟢 REVIEW NEEDED"
        ;;
    "complete")
        if [ -z "$2" ]; then
            echo -e "${RED}❌ Please provide issue number${NC}"
            show_usage
            exit 1
        fi
        update_status "$2" "✅ COMPLETED"
        ;;
    "block")
        if [ -z "$2" ]; then
            echo -e "${RED}❌ Please provide issue number${NC}"
            show_usage
            exit 1
        fi
        update_status "$2" "❌ BLOCKED"
        ;;
    "create")
        if [ -z "$2" ]; then
            echo -e "${RED}❌ Please provide issue number${NC}"
            show_usage
            exit 1
        fi
        create_issue "$2"
        ;;
    "help"|"--help"|"-h"|"")
        show_usage
        ;;
    *)
        echo -e "${RED}❌ Unknown command: $1${NC}"
        show_usage
        exit 1
        ;;
esac
