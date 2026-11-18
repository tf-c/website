# Editing this website

You do not need to know HTML to update this site.

## The easy way: Pages CMS

1. Go to **https://app.pagescms.org** and sign in with GitHub.
2. Open the `tf-c/website` repository.
3. Pick what you want to change from the left-hand menu, fill in the form, and
   press save.

Saving writes the change straight to GitHub, and the live site rebuilds itself
within a minute or two. Refresh the page if you don't see it immediately.

### What you can edit

| Menu item          | What it changes                                              |
| ------------------ | ------------------------------------------------------------ |
| Site basics        | Team name, team number, the links in the top bar              |
| Home page text     | The "About the team" heading and paragraphs                   |
| Home page photos   | The slideshow on the home page                                |
| Robots             | The robot cards on the home page                              |
| Mentors            | Mentors on "Meet the team" (and on Contact, if given an email) |
| Team members       | Students on "Meet the team"                                   |
| Sponsor logos      | The logos on the Sponsors page                                |
| Sponsors page text | The wording around those logos                                |
| Contact page       | The team email address and the headings                       |

### Adding a person

Open **Mentors** or **Team members**, press the add button, then fill in name,
role and photo. Pronouns are optional — leave the box empty and nothing shows.
Drag rows to reorder them; the website shows them in the order you see there.

Give a mentor an email address and they are automatically listed on the Contact
page too. Leave it empty and they only appear on "Meet the team".

### Photos

Upload photos through the form — they are stored in the `images` folder. Please
resize large photos before uploading (roughly 1000 pixels wide is plenty), or
the site gets slow on phones.

Always fill in the "photo description" box. Screen readers read it aloud to
people who can't see the picture.

## How this works underneath

The pages are built by Jekyll, which GitHub runs for you automatically.

- `_data/*.yml` — all the content. This is what the CMS forms edit.
- `_layouts/default.html` — the shared top bar, banner and footer.
- `index.html`, `ourteam.html`, `contact.html`, `sponser.html` — page templates.
- `styles.css` — all the styling.
- `images/` — uploaded photos.

Editing the `.yml` files by hand on GitHub works too, if you prefer. The CMS is
just a friendlier way of doing the same thing.

Note: the Sponsors page file is called `sponser.html` (spelled wrong). It was
named that before and renaming it would break any existing links, so the file
keeps its name while the menu shows "Sponsors".
