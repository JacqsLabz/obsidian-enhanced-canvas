export const firstInstallContent = `
Beyond the original "Property Link" and "Auto Focus" features, recent updates add:

### ✨ Split by Headings & Add Notes by Tag

- **Split by headings**: right-click a file or text node in Canvas to break it into a tree of nodes, one per heading.
- **Add notes by tag...**: right-click an empty spot on the canvas to bulk-import every note matching a tag query.

### ✨ Send Note to Canvas

The **"Send to Canvas"** command adds the current note to a Canvas of your choice and writes a "canvas" property to the note, so you can jump back to the board later. That Canvas then becomes the selected one, and **"Send to Selected Canvas"** adds other notes to it without picking the file again.

### ✨ Auto-Resize Node

Double-click a node's bottom edge to turn on auto-resize: its height then keeps fitting the content as you change the width or edit the text.

[View detailed demo at github](https://github.com/RobertttBS/obsidian-enhanced-canvas)
`;

export const fixCursorShiftIssueInStackTabsCanvas = `
> [!bug] Fixed in 1.0.30
> Deleting a folder no longer throws an error, and the notes inside it are cleaned up properly.
> Moving or renaming a canvas no longer leaves stale or duplicate links in note properties.

> [!bug] Fixed in 1.0.29
> Auto-resize and drag-to-create nodes now work in pinned Canvas tabs that haven't been opened yet (Windows).

> [!success] Refactor in 1.0.26–1.0.28
> Faster startup sync, fewer redundant frontmatter writes, and more robust property cleanup.

> [!note] Feature in 1.0.25
> "Add notes by tag..." supports multi-tag queries (AND, OR, exclude) with suggestions.

> [!note] Feature in 1.0.24
> Set the default width and height for new nodes in the Enhanced Canvas settings.

> [!note] Feature in 1.0.23
> New "Add notes by tag..." right-click menu option to bulk-import notes by tag.

> [!bug] Fixed in 1.0.22
> Properties now sync for pinned Canvas tabs on Windows 11.

> [!note] Feature in 1.0.21
> Canvas core now supports backlinks, so "Sync Frontmatter" (and the plugin's CSS) can be turned off in the Enhanced Canvas settings.

> [!note] Feature in 1.0.20
> "Focus" now works for Linked Mentions.

> [!note] Feature in 1.0.19
> "Split by headings" now works for Card Nodes.

> [!bug] Fixed in 1.0.18
> Fixes the cursor position shift in Canvas when "stacked tabs" is enabled (a bug in the Canvas core plugin).
`;

export const releaseNotesContent: Record<string, string> = {
    "1.0.30": fixCursorShiftIssueInStackTabsCanvas,
    "1.0.29": fixCursorShiftIssueInStackTabsCanvas,
    "1.0.28": fixCursorShiftIssueInStackTabsCanvas,
    "1.0.27": fixCursorShiftIssueInStackTabsCanvas,
    "1.0.26": fixCursorShiftIssueInStackTabsCanvas,
    "1.0.25": fixCursorShiftIssueInStackTabsCanvas,
    "1.0.24": fixCursorShiftIssueInStackTabsCanvas,
    "1.0.23": fixCursorShiftIssueInStackTabsCanvas,
    "1.0.22": fixCursorShiftIssueInStackTabsCanvas,
    "1.0.21": fixCursorShiftIssueInStackTabsCanvas,
    "1.0.20": fixCursorShiftIssueInStackTabsCanvas,
    "1.0.19": fixCursorShiftIssueInStackTabsCanvas,
    "1.0.18": fixCursorShiftIssueInStackTabsCanvas,
    "1.0.17": firstInstallContent
};
