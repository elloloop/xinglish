# Issue Tracking System

This document explains how to use the issue tracking system for the Xinglish project.

## Quick Start

### List All Issues

```bash
./scripts/issue-tracker.sh list
```

### Check Issue Status

```bash
./scripts/issue-tracker.sh status [issue_number]
# Example: ./scripts/issue-tracker.sh status 1
```

### Update Issue Status

```bash
# Start working on an issue
./scripts/issue-tracker.sh start [issue_number]

# Mark as ready for review
./scripts/issue-tracker.sh review [issue_number]

# Mark as completed
./scripts/issue-tracker.sh complete [issue_number]

# Mark as blocked
./scripts/issue-tracker.sh block [issue_number]
```

## Issue Status Flow

```
🔴 NOT STARTED → 🟡 IN PROGRESS → 🟢 REVIEW NEEDED → ✅ COMPLETED
                    ↓
                ❌ BLOCKED
```

### Status Descriptions

- **🔴 NOT STARTED**: Issue is created but work hasn't begun
- **🟡 IN PROGRESS**: Work is actively being done on the issue
- **🟢 REVIEW NEEDED**: Work is complete, ready for review/testing
- **✅ COMPLETED**: Issue is fully resolved and verified
- **❌ BLOCKED**: Work is blocked by dependencies or external factors

## Issue Structure

Each issue file contains:

### Required Sections

- **Issue Information**: Number, title, status, priority, assignee, dates
- **Status Tracking**: Checkboxes for each status level
- **Problem**: Clear description of what needs to be fixed
- **Acceptance Criteria**: Specific, measurable success criteria
- **Dependencies**: Other issues that must be completed first

### Optional Sections

- **Testing**: Test requirements and results
- **Documentation**: Documentation updates needed
- **Completion Checklist**: Final verification steps
- **Notes**: Additional context or lessons learned

## Priority Levels

- **🔴 CRITICAL**: Must be fixed immediately (blocking other work)
- **🔴 HIGH**: Important for project success
- **🟡 MEDIUM**: Nice to have, but not blocking
- **🟢 LOW**: Future enhancement or optimization

## Best Practices

### 1. Update Status Regularly

- Use the script to update status as work progresses
- Don't let issues stay in "IN PROGRESS" for too long

### 2. Follow Dependencies

- Check the master execution plan (Issue #0) for dependencies
- Don't start an issue until its dependencies are complete

### 3. Complete Acceptance Criteria

- All acceptance criteria must be met before marking as complete
- Test thoroughly before marking as "REVIEW NEEDED"

### 4. Document Progress

- Add notes to the Status History section
- Include any blockers or important decisions

## Example Workflow

```bash
# 1. Check what needs to be done
./scripts/issue-tracker.sh list

# 2. Start working on Issue #1
./scripts/issue-tracker.sh start 1

# 3. Work on the issue...

# 4. Mark as ready for review
./scripts/issue-tracker.sh review 1

# 5. After review and testing, mark as complete
./scripts/issue-tracker.sh complete 1

# 6. Move to next issue in the dependency chain
```

## Troubleshooting

### Issue Not Found

- Make sure the issue number is correct
- Check that the issue file exists in the `issues/` folder

### Status Not Updating

- Verify the issue file has the correct format
- Check that the Status Tracking section exists
- Ensure the script has execute permissions

### Permission Errors

```bash
chmod +x scripts/issue-tracker.sh
```

## Integration with Development

### Before Starting Work

1. Check issue dependencies
2. Update status to "IN PROGRESS"
3. Review acceptance criteria

### During Development

1. Update status as needed
2. Add notes to Status History
3. Test against acceptance criteria

### Before Completion

1. Ensure all acceptance criteria are met
2. Update status to "REVIEW NEEDED"
3. Get review/approval

### After Completion

1. Update status to "COMPLETED"
2. Update dependent issues if needed
3. Move to next issue in the chain

## Support

If you encounter issues with the tracking system:

1. Check this README first
2. Review the script code in `scripts/issue-tracker.sh`
3. Check issue file format against the template
4. Ask for help in the project discussions
