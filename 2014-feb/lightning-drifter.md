# VirtualBox + Node.js = Drifter

We've all used Vagrant to create "on the fly" virtual machines for development. But Vagrant could be better:

1. It sometimes confuses VM Instances with intstance prototypes.
2. It could be a little easier to generate a cluster of VMs.
3. I've spent the last four years trying to escape from Ruby.
4. The interface could be a little friendlier.

Drifter is a Node.JS module that layers on top of VirtualBox, exporting a RESTful API and Web Admin interface to the host with
these features:

1. It's got a Web UI so non-technical people can use it.
2. It's got command line tools for Über-G33ks.
3. It exports web space to the guest OSs so you can host your own local Debian or CentOS repositories.
4. You extend it with JavaScript instead of Ruby.

In this talk I'll present 5 minutes of slides while instantiating an example cluster of virtual machines running web server,
app server and database server software.

## Speaker: Meadhbh Hamrick
https://github.com/OhMeadhbh and https://github.com/smithee-us

I build network security testing tools for a living, but in the past I've build control systems for Satellites, Nuclear Power
Stations and Steel Mills. I also spent time at Linden Lab building the "next generation" Second Life in node.js and led the 
team that put software in electric guitars and Wurlitzer Jukeboxes.

![Meadhbh Hamrick](http://home.meadhbh.org/profile/meadhbh_profile_001.jpg)