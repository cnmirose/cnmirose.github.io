# Turning the counter on

`cosmic.php` counts distinct visitors for real. It needs one writable
directory and nothing else — no database, no external service, no JavaScript.

## Setup

```sh
cd ~/public_html/worldofbits
mkdir counter_data
chmod 733 counter_data      # web server can write; nobody can list it
```

If PHP on your host runs as *you* rather than as `www-data`, `chmod 755` is
enough and is tidier. Try 755 first; if the page shows the "needs a writable
directory" message, go to 733.

Then load `cosmic.php`. You should see a number and, on your first visit,
"including you, just now."

## Protecting the data directory

On Apache, drop this in `counter_data/.htaccess`:

```
Require all denied
```

(or `Deny from all` on Apache 2.2). Nothing in there is sensitive — see below —
but there's no reason to serve it.

## What it stores, and what it doesn't

**No IP address is ever written to disk.** On each request the visitor's IP is
combined with a 32-byte random salt generated once on your server, run through
HMAC-SHA-256, and truncated to 16 hex characters. That digest is what gets
stored. Without the salt file the digests are meaningless, and the salt never
leaves your server.

The files that appear:

| File | Contents |
|---|---|
| `salt.bin` | 32 random bytes, generated once, mode 0600 |
| `unique.txt` | a single integer |
| `views.txt` | a single integer |
| `b_00.txt` … `b_ff.txt` | 256 buckets of 16-character digests |

Digests are bucketed by their first two hex characters, so checking whether a
visitor is new reads about 1/256th of the data rather than all of it — roughly
9 KB per request at your current scale, and it stays fast as the count grows.
All writes take an exclusive `flock`, so concurrent hits can't corrupt a count.

## Continuity with the old counter

Your previous counter read **141,589** on 12 November 2019. That number is set
as `LEGACY_BASELINE` in `counter.php`, and new unique visitors are added to it,
so the displayed figure continues upward from where you left off rather than
restarting at 1. Change the constant if you'd rather start clean.

## Crawlers

Googlebot and friends are excluded by user-agent, as are requests with no
user-agent at all. Otherwise the number would mostly measure robots. Repeat
visits within 30 minutes count as one visit, so a reload isn't a new view.

## If you don't have write permission

The page degrades quietly: it shows 141,589 labelled as the November 2019
figure, and says the live counter needs a writable directory. Nothing errors
and nothing looks broken. Given your old counter was working, though, something
on that server could write — so this will probably just work.

## Testing it

```sh
php -l counter.php && php -l cosmic.php   # syntax check
```

To watch it work, load the page, then:

```sh
cat counter_data/unique.txt counter_data/views.txt
```
