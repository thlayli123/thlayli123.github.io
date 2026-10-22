# Hunters Creek Poker – Google Sites widgets

Source for the embedded widgets on https://sites.google.com/site/hunterscreekpoker.
In the Sites editor, each one is pasted into **Insert → Embed → Embed code**.

| File | Goes on | Notes |
|---|---|---|
| `results-embed.html` | Each year page under Results (2026, 2027, …) | Change `const YEAR = 2026;` to that page's year. Nothing else to edit. |
| `blinds-embed.html` | Blinds page | Monthly blinds, TOC blinds, payouts & points by player count. |
| `stats-embed.html` | Stats page | Trophy leaders, champions by year, donkey award, TOC carry-forward. |

After pasting, drag the embed box tall enough that the longest tab fits without its own scroll bar.

## Where the data comes from

The widgets read live data every time the page loads, so there's nothing to re-paste when results change.

- **Monthly results:** CSV files on **https://thlayli123.github.io/** (the `thlayli123.github.io` repo, not this one), named `mmm_yy_prizes.csv`.
- **Everything else:** the Google Sheet "Hunters Creek Poker Tour - Running Points Total"
  (`1bg7a_4igZyw5CSUSrKa8cQh-WhKFaGhKKRgM6SBX1ZU`). It must stay shared as **Anyone with the link can view**.

The widgets find sheet tabs **by name**, so don't rename these tabs:

| Widget | Sheet tabs it reads |
|---|---|
| Results | `2026` (the page's year), `Lifetime Stats` |
| Blinds | `Monthly Structure`, `TOC Structure`, `Payout Structure`, `Points Structure` |
| Stats | `Trophy Totals`, `Trophy Names`, `Donkey Chart`, `Donkey Winners`, `Carryover` |

If a tab is missing or renamed, its button just disappears from the widget. Nothing breaks.

## Every month

1. Upload the results CSV to the thlayli123.github.io repo, e.g. `oct_26_prizes.csv`.
   - The name must be a three-letter lowercase month, underscore, two-digit year, then `_prizes.csv`.
   - The first line must be exactly `#,Name,Award,Amount,Points,Awarded To`.
2. Update the Google Sheet as usual: the year tab, Lifetime Stats, Carryover, Trophy Names, and Donkey Winners.

The month button lights up and the page opens on the newest month automatically.

## Every January (new year)

**Google Sites:**
1. Go to Pages, open the ⋮ menu on last year's page, and choose **Duplicate**. Rename the copy to the new year and drag it to the top of Results.
2. Edit the embed on the new page and change `YEAR` to the new year.
3. Update the page text: TOC champion, Player of the Year, and qualifiers.

Leave last year's page alone; it keeps showing its own year.

**GitHub (thlayli123.github.io):** use the new year in file names, e.g. `jan_27_prizes.csv`.

**Google Sheet:**
- Add a tab named exactly with the new year (e.g. `2027`). The Standings button appears once it exists.
- Add the new year's column to `Carryover`.
- Add the new year's rows to `Trophy Names` and its column to `Trophy Totals`.

## Troubleshooting

- **A month button is greyed out:** the CSV file name or its first line doesn't match the format above, or the file isn't published on thlayli123.github.io yet. GitHub Pages can take a minute or two to update.
- **The Standings, Lifetime, or Stats tabs are missing:** a sheet tab was renamed or the sheet's sharing changed.
- **Every sheet-based tab disappears at once:** Google may have changed the sheet page the widgets use to look up tab IDs (`/htmlview`). The fix is to hard-code each tab's `gid`, which you can find in the URL when you click the tab in Sheets.
