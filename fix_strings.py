import os
import re

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    # Common double-encoded utf-8 / windows-1252 garbled strings found in the codebase
    content = content.replace('â€”', '-')
    content = content.replace('â†’', '->')
    content = content.replace('â€¢', '•')
    content = content.replace('âœ“', '✓')
    content = content.replace('â‚¹', '₹')
    content = content.replace('?"', '-')
    content = content.replace('+"', '->')
    content = content.replace('+\'', '->')
    content = content.replace('-?', '')
    content = content.replace(',1', '₹')
    content = content.replace(',10', '₹0')
    content = content.replace('o"', '✓')
    content = content.replace('?', '•')
    content = content.replace('s', '🚀')
    content = content.replace('?', ' ') # sometimes unknown bytes render as '?' in terminal but in code it might be an unprintable char. I'll just use regex for non-ascii

    if original != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            fix_file(os.path.join(root, file))
