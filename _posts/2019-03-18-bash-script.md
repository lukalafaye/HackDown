---
title: How can I run a bash script every N seconds?
layout: post
categories: Programming
---

# How can I run a bash script every N seconds?

This is a quick and simple HowTo guide that'll help you run a bash script every N seconds. Note that you can run root commands from the script as we'll use `systemd`.

## Create a service that'll run your script

The first step is to setup a job that'll execute the script whenever the timer will ask so. You can use `nano` to make a new service called `name.service` in `/etc/systemd/system/`, where you can choose name. If the package is not installed, run the following command and you may continue.

Ubuntu :
```bash
sudo apt-get install nano
```

CentOS / RHEL / CloudLinux / Fedora :
```bash
sudo yum install nano
```

Run nano to create the file:

```bash
sudo nano /etc/systemd/system/name.service
```

and fill it with (ctrl+shift+v to paste in terminal)

```bash
[Unit]
Description=A short description

[Service]
Type=oneshot
ExecStart=/bin/bash /path/to/script.sh
```
where `Description` explains what the bash script does. It will be displayed when you list all active services with `systemctl`, and `/path/to/script.sh` is your script's location. You can get it by typing:

```bash
readlink -f yourscript.sh
```

## Create a timer that will make `systemd` run your service every N seconds

The second step is to setup a timer that will ask `systemd` to run the service you previously created every N seconds. Once again, we'll use `nano` to create the file:

```bash
sudo nano /etc/systemd/system/name.timer
```
> You need to use the **same** name string for both files. In the end, you should have created `name.service` and `name.timer`.

Once you're ready to edit the timer file, paste the following content:

```bash
[Unit]
Description=A short description

[Timer]
OnUnitActiveSec=360s
OnBootSec=10s

[Install]
WantedBy=timers.target
```

where `Description` gives details about the service the timer is associated too, 360 can be replaced by the number of seconds (N) you need. You can leave the rest as it is, `OnBootSec` is just making the timer run 10 seconds after every startup so that you don't have to start it manually each time you reboot your machine!

## Test your timer and service

The last step is to reload all `systemctl` daemons, start your timer and check if it's active. Note that when you start name.timer, it'll run the service once and then every N seconds.

```bash
sudo systemctl daemon-reload
sudo systemctl start name.timer
systemctl list-timers
```

You should get an output looking like this:

![timers.jpg](/img/timers.jpg)

Where your timer should be in the UNIT column and the time left before your service is run another time in the LEFT column.

That's it! Your bash script and whatever commands it contains will be executed every N seconds, even if you restart your machine.
