---
title: Let's Encrypt, a free and open-source certificate authority
layout: post
categories: Technology
---

# Let's Encrypt, a free and open-source certificate authority

## What is Let's Encrypt?

Let's Encrypt is a project from the [Internet Security Research Group](https://letsencrypt.org), a non-profit (501)(3)(c) organization which goal is to make web encryption an universal standard.
So, their goal is to offer free SSL certificates for everyone, for a safer Internet.

## Types of certificates
Their SSL certificates are only **Domain-validated**, meaning they do not offer extended validation certificates, the certificates which show the company name in the address bar:
![EV SSL certificate](https://upload.wikimedia.org/wikipedia/commons/b/b3/Wikimedia_donation_page_with_extended_validation_certificate_in_firefox.png)

If they were to do it, it wouldn't be free because getting an EV certificate can be a lengthy process. With their automated ACME client, they can emit millions of certificate everyday rapidly and freely.


The ISRG is sponsord by virtually all giants of the web, including Google, OVH, Mozilla, Cisco... and Let's Encrypt's integration has been quite fast and effective, thus encrypting thousands of certificates in the first month.
Everyone can now benefit from these certificates.

## Certificate support
Since March 14, Let's Encrypt now support:
- SAN certificates: certificates with several alternate names to cover several domains and subdomains at the same time (for example www.hackdown.me and hackdown.me)
- Wildcard certificates: certificates covering every subdomains and the domain apex (for example *.hackdown.me and hackdown.me)
- You can also combine these two types of certificates (for example *.hackdown.me *.staging.hackdown.me and hackdown.me)


To set up Let's Encrypt, you need to set up on your Unix system the ACME client which can be obtained through APT or installing Let's Encrypt plugins for Plesk and IIS. If you do not have access to the internal workings of your web server
(if you are on shared hosting for example) you can still use [SSLForFree.com](https://www.sslforfree.com) providing you have access to the public document root /public_html/ or your DNS manager.

## Validation methods
There are two possible ways to validate your ownership of your website:
- writing TXT records on your DNS manager, obtained through your Let's Encrypt Client
- creating specific files on your FTP server to write down validation Data in the public document root


It's through these ways that you get Let's Encrypt certificates. It has to be renewed every ninety days (3 months) or it expires.

## Conclusion
The arrival of Let's Encrypt finally shut down the monopoly of the other certificate authorities which would overprice their SSL certificates since the 1990s. However, they have a warranty, which Let's Encrypt doesn't have unfortunately.
