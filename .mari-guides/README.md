# Mari's Project Guides

This folder contains internal documentation and guides for the SOMA Studio website project. These are **private guides** not included in the public repository.

---

## 📚 Available Guides

### **1. QA Fix Technical Report**
**File:** `QA-FIX-TECHNICAL-REPORT.md`

Detailed technical documentation of the QA fixes applied on November 23, 2025, including:
- Complete list of 6 issues fixed (footer grid, semantic HTML, aria-labels, navigation, documentation)
- Technical challenges encountered (whitespace mismatches, IDE interference, false success reporting)
- How Perl one-liner scripts were used to fix issues when automated approaches failed
- Lessons learned for future code fixes
- Before/after code comparisons for each fix

**When to reference:**
- Understanding why certain code changes were made
- Learning about troubleshooting automated fix failures
- Deciding which tool to use for future structural code changes

---

### **2. Pricing Update Guide**
**File:** `PRICING-UPDATE-GUIDE.md`

Step-by-step guide for updating service prices and package pricing on the website, including:
- How to update individual service prices
- How package pricing is calculated
- When to update `averagePricePer60Min` value
- Testing checklist after price changes
- Example walkthrough of a price increase scenario

**When to reference:**
- Changing service prices (seasonal updates, new services)
- Adjusting package discount percentages
- Understanding package pricing calculations
- Ensuring pricing changes don't break the site

---

## 🔒 Privacy Note

**These guides are kept private** because they contain:
- Internal pricing strategy information
- Technical implementation details
- Maintenance procedures

They are **not committed to git** (folder is in `.gitignore`).

---

## 📁 Folder Structure

```
.mari-guides/
├── README.md                        # This file
├── QA-FIX-TECHNICAL-REPORT.md      # Technical report on recent QA fixes
└── PRICING-UPDATE-GUIDE.md          # How to update pricing
```

---

## 🔄 Keeping Guides Updated

When making significant changes to the website:
1. Update relevant guides if processes change
2. Add new guides for new features or workflows
3. Keep guides current with the actual codebase

---

*Last updated: November 23, 2025*
