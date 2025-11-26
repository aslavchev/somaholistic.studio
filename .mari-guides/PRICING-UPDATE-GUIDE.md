# Pricing Update Guide

This document explains how to update service prices and package pricing on the SOMA Studio website.

## Service Prices

Individual service prices are located in `/src/pages/Pricing.tsx`:

```typescript
const services = [
  {
    title: t("Ритуал за благоденствие", "SOMA Wellness Ritual"),
    duration90: t("90 минути", "90 minutes"),
    price90: 150,  // <-- Update this value
    featured: true
  },
  {
    title: t("Фитотерапевтична консултация", "Phytotherapy Consultation"),
    duration60: t("60 минути", "60 minutes"),
    price60: 80  // <-- Update this value
  },
  // ... more services
];
```

**To update a service price:**
1. Open `/src/pages/Pricing.tsx`
2. Locate the service in the `services` array
3. Update the `price60` or `price90` value
4. Save the file

## Package Pricing

Package pricing uses a calculated discount system based on `averagePricePer60Min`:

```typescript
// Package pricing based on averagePricePer60Min = 90 BGN
// This represents the average cost of most 60-minute services (Classic Massage, Wellness Coaching)
// When updating service prices, review package calculations to ensure discounts remain competitive
const averagePricePer60Min = 90;  // <-- Base price for package calculations
```

### How Packages Are Calculated

- **4-Session Bundle**: `price: 480` (based on `averagePricePer60Min * 4 = 360`, offering 33% discount)
- **6-Session Bundle**: `price: 690` (based on `averagePricePer60Min * 6 = 540`, offering 28% discount)

The discount percentages are calculated automatically:
```typescript
get discount() { return Math.round((this.savings / this.normalPrice) * 100); }
```

### When to Update Package Pricing

**You should review package pricing when:**

1. **Individual service prices change significantly** (e.g., most 60-minute services are now 100 BGN instead of 90 BGN)
2. **You want to adjust package discounts** (e.g., offer bigger savings to incentivize packages)
3. **You launch new premium services** that shift the "average" price point

### Steps to Update Package Pricing

1. **Review average service costs:**
   - Look at all 60-minute services (Classic Massage, Wellness Coaching, etc.)
   - Calculate the new average if prices have changed

2. **Update `averagePricePer60Min`:**
   ```typescript
   const averagePricePer60Min = 100;  // Updated from 90 BGN
   ```

3. **Optionally adjust package prices:**
   ```typescript
   const package4Sessions = {
     price: 540,  // Updated to maintain discount %
     normalPrice: averagePricePer60Min * 4,
     // ...
   };
   ```

4. **Test the changes:**
   - Run `npm run dev`
   - Navigate to `/pricing`
   - Verify discount percentages display correctly
   - Check that both Bulgarian and English versions show correct prices

## Testing Checklist

After updating prices:

- [ ] All individual service prices display correctly
- [ ] Package "normal price" calculations are accurate
- [ ] Package discount percentages are reasonable (10-15%)
- [ ] Savings amounts are calculated correctly
- [ ] Both Bulgarian (лв) and English (BGN) currency labels display
- [ ] Mobile and desktop layouts look correct
- [ ] No console errors in browser dev tools

## Important Notes

- **Package prices are fixed values**, not auto-calculated. If you want to maintain the same discount percentage after changing `averagePricePer60Min`, you must manually update the `price` field.
- **The `normalPrice` IS auto-calculated** from `averagePricePer60Min`, so updating that value will automatically recalculate the "before discount" price shown to customers.
- **Always commit pricing changes with a clear message** like "Update pricing: increase 60-min services to 100 BGN"

## Example: Increasing 60-Minute Service Prices

**Scenario:** You want to increase Classic Massage and Wellness Coaching from 90 BGN to 100 BGN.

**Steps:**
1. Update individual service prices in the `services` array
2. Update `averagePricePer60Min` from 90 to 100
3. Update package prices to maintain ~33% discount:
   - 4-Session: 480 BGN → 533 BGN (or round to 530 BGN)
   - 6-Session: 690 BGN → 800 BGN (or round to 795 BGN)
4. Test and commit

---

*Last updated: January 2025*
