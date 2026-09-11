NONA BIRTHDAY OPERATION
========================

GitHub Pages-ready static website.

FLOW
----
index.html
    -> recon.html
    -> discover robots.txt
    -> admin.html
    -> enter:
       username: nona
       password: ladoo
    -> secret.html
    -> birthday tree + message

IMPORTANT
---------
This is a birthday puzzle, NOT real authentication.
GitHub Pages is static, so anything delivered to the browser can ultimately
be inspected. Do not put real passwords, secrets, API keys, or private data
in this project.

PHOTOS
------
Replace these six placeholder files:
assets/photos/01.jpg
assets/photos/02.jpg
assets/photos/03.jpg
assets/photos/04.jpg
assets/photos/05.jpg
assets/photos/06.jpg

GITHUB PAGES
------------
1. Create a new GitHub repository.
2. Upload the CONTENTS of this folder (not the outer folder itself).
3. In GitHub: Settings -> Pages.
4. Select "Deploy from a branch".
5. Select your main branch and root (/).
6. Save.
7. Open the GitHub Pages URL GitHub gives you.

No Python. No Flask. No database. No build step.

NOTE
----
If you want to keep the secret page from being directly opened before solving,
the current JavaScript gate redirects unauthorized direct visits only when
you add the optional check below. The visual experience itself is client-side.
