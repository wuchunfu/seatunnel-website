"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[39684],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>h});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),p=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(o.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,h=g["".concat(o,".").concat(d)]||g[d]||c[d]||s;return n?t.createElement(h,l(l({ref:a},u),{},{components:n})):t.createElement(h,l({ref:a},u))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26385:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=n(58168),r=(n(96540),n(15680));const s={},l="Become Apache Release Manager",i={unversionedId:"contribution_guide/release",id:"contribution_guide/release",title:"Become Apache Release Manager",description:"Release managers shepherd a release from an initial community consensus to getting the compiled code package to final distribution, and may be involved in publicizing the release to the project's community and the ASF in general.",source:"@site/community/contribution_guide/release.md",sourceDirName:"contribution_guide",slug:"/contribution_guide/release",permalink:"/zh-CN/community/contribution_guide/release",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/contribution_guide/release.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Become Apache SeaTunnel Committer",permalink:"/zh-CN/community/contribution_guide/committer"},next:{title:"\u6587\u6863\u987b\u77e5",permalink:"/zh-CN/community/submit_guide/document"}},o={},p=[{value:"Environment Preparation",id:"environment-preparation",level:2},{value:"Install Git",id:"install-git",level:3},{value:"Install GPG",id:"install-gpg",level:3},{value:"Install SHASUM",id:"install-shasum",level:3},{value:"SVN",id:"svn",level:3},{value:"MAVEN",id:"maven",level:3},{value:"Environment Configuration",id:"environment-configuration",level:2},{value:"Configure GPG KEY",id:"configure-gpg-key",level:3},{value:"Create the Key",id:"create-the-key",level:4},{value:"Verify Key",id:"verify-key",level:4},{value:"Upload the key to the public server",id:"upload-the-key-to-the-public-server",level:4},{value:"Verify that the key is uploaded properly",id:"verify-that-the-key-is-uploaded-properly",level:4},{value:"Configure maven",id:"configure-maven",level:3},{value:"Create a master password",id:"create-a-master-password",level:4},{value:"Configure the master password",id:"configure-the-master-password",level:4},{value:"Encrypt the Apache LDAP password",id:"encrypt-the-apache-ldap-password",level:4},{value:"Add new profile",id:"add-new-profile",level:4},{value:"Project version preparation",id:"project-version-preparation",level:2},{value:"Branch preparation",id:"branch-preparation",level:3},{value:"Update release-note",id:"update-release-note",level:3},{value:"Precompiled test",id:"precompiled-test",level:3},{value:"Compile",id:"compile",level:3},{value:"Submit source code",id:"submit-source-code",level:3},{value:"Deploy jar packages",id:"deploy-jar-packages",level:3},{value:"Upload to SVN",id:"upload-to-svn",level:2},{value:"Pull the release and dev repositories to the local",id:"pull-the-release-and-dev-repositories-to-the-local",level:3},{value:"Upload the key to the dev and release repositories",id:"upload-the-key-to-the-dev-and-release-repositories",level:3},{value:"Upload source code and binary packages to the dev repository",id:"upload-source-code-and-binary-packages-to-the-dev-repository",level:3},{value:"Copy source code and binary packages",id:"copy-source-code-and-binary-packages",level:4},{value:"Generate signature",id:"generate-signature",level:4},{value:"Generate GPG signature",id:"generate-gpg-signature",level:4},{value:"Check file signature",id:"check-file-signature",level:4},{value:"Check digital signatures",id:"check-digital-signatures",level:4},{value:"Commit",id:"commit",level:4},{value:"Vote by mail",id:"vote-by-mail",level:2},{value:"dev@seatunnel.apache.org Voting",id:"devseatunnelapacheorg-voting",level:3},{value:"Voting initiate",id:"voting-initiate",level:4},{value:"Voting close",id:"voting-close",level:4},{value:"Official Release",id:"official-release",level:2},{value:"Moving files",id:"moving-files",level:3},{value:"Release Maven Repository",id:"release-maven-repository",level:3},{value:"Send notification email",id:"send-notification-email",level:3}],u={toc:p},g="wrapper";function c(e){let{components:a,...s}=e;return(0,r.yg)(g,(0,t.A)({},u,s,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"become-apache-release-manager"},"Become Apache Release Manager"),(0,r.yg)("p",null,"Release managers shepherd a release from an initial community consensus to getting the compiled code package to final distribution, and may be involved in publicizing the release to the project's community and the ASF in general."),(0,r.yg)("p",null,"Tips: The Release Manager needs to have an Apache LDAP account, which means you need to become a Committer of the project before you can have an Apache LDAP account. All of the following words for ",(0,r.yg)("inlineCode",{parentName:"p"},"tyrantlucifer")," will serve as an example of a userId in the document, and the release manager needs to use their own userId."),(0,r.yg)("p",null,"An Apache release is a set of valid, signed, artifacts, voted on by the appropriate PMC and distributed on the official ASF release infrastructure."),(0,r.yg)("p",null,"For a release, you go through the following steps:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Has code that complies with the software licensing requirements"),(0,r.yg)("li",{parentName:"ul"},"Decides as a community to make a release, and designates a release manager"),(0,r.yg)("li",{parentName:"ul"},"The release manager prepares and signs the proposed release materials"),(0,r.yg)("li",{parentName:"ul"},"The PMC votes on whether to approve the release"),(0,r.yg)("li",{parentName:"ul"},"If the vote passes, the release manager copies the artifacts to the distribution infrastructure.")),(0,r.yg)("p",null,"The source code and build process must comply with the ASF legal and intellectual property requirements for a valid release, and the project must have the infrastructure in place to correctly sign the release artifacts."),(0,r.yg)("h2",{id:"environment-preparation"},"Environment Preparation"),(0,r.yg)("p",null,"If this is the first time for a publisher to publish, you need to install the necessary environment, including the signature tool GnuPG and Maven repository certification-related preparations."),(0,r.yg)("h3",{id:"install-git"},"Install Git"),(0,r.yg)("p",null,"Use to clone project source code locally."),(0,r.yg)("h3",{id:"install-gpg"},"Install GPG"),(0,r.yg)("p",null,"Used to generate a digital signature, leaving a trail of every action you take. Apache's maven and SVN repositories both use GPG signatures to verify the validity of files."),(0,r.yg)("p",null,"Download GnuPG binary releases from ",(0,r.yg)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"the official GnuPG website"),". "),(0,r.yg)("p",null,"Note: The commands of 1. x and 2. x versions of GnuPG are slightly different. The following description takes 2.2.28 as an example. After the installation, the GPG command is added to the system environment variable and is available."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Check the version, which should be 2. x\ngpg --full-gen-key\n")),(0,r.yg)("h3",{id:"install-shasum"},"Install SHASUM"),(0,r.yg)("p",null,"Used to generate signatures for files."),(0,r.yg)("h3",{id:"svn"},"SVN"),(0,r.yg)("p",null,"Used to pull the Apache Release SVN repository. Apache uses svn to host the release of the project."),(0,r.yg)("h3",{id:"maven"},"MAVEN"),(0,r.yg)("p",null,"Used to compile the project."),(0,r.yg)("h2",{id:"environment-configuration"},"Environment Configuration"),(0,r.yg)("h3",{id:"configure-gpg-key"},"Configure GPG KEY"),(0,r.yg)("h4",{id:"create-the-key"},"Create the Key"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"gpg --full-gen-key\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"gpg (GnuPG) 2.0.22; Copyright (C) 2013 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (3072) 4096 \nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 0 \nKey does not expire at all\nIs this correct? (y/N) y \n")),(0,r.yg)("p",null,"As shown above, the options are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"1"),(0,r.yg)("li",{parentName:"ul"},"4096"),(0,r.yg)("li",{parentName:"ul"},"0"),(0,r.yg)("li",{parentName:"ul"},"y")),(0,r.yg)("p",null,"In the process of configuring GPG, the key types selected are RSA and RSA (default), so the first option is 1, and the desired key size can be directly input the corresponding value. The third option is 0, indicating that the validity period of the key is never expired. Finally, input y to ensure that the above input is correct."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'You need a user ID to identify your key; the software constructs the user ID\nfrom the Real Name, Comment and Email Address in this form:\n    "Heinrich Heine (Der Dichter) <heinrichh@duesseldorf.de>"\n\nReal name: tyrantlucifer \nEmail address: tyrantlucifer@apache.org\nComment: The key of Apache SeaTunnel\nYou selected this USER-ID:\n    \u201ctyrantlucifer (The key of Apache SeaTunnel) <tyrantlucifer@apache.org>\u201d\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O \nYou need a password to protect your private key.\n')),(0,r.yg)("p",null,"As shown above, you will need to specify your personal information and encryption password for this key. You will need to fill in the following information:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name"),(0,r.yg)("li",{parentName:"ul"},"Email (Apache Email)"),(0,r.yg)("li",{parentName:"ul"},"Comment for key"),(0,r.yg)("li",{parentName:"ul"},"Password (Very important, don't forget)")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"We need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\ngpg: key 09****85 marked as ultimately trusted\npublic and secret key created and signed.\n\npub   4096R/0983DF85 2022-12-28\nkeys fingerprint = AE** FC** EC** 60** 72**  56** 05** AE** 09** DF**\nuid                  tyrantlucifer (The key of Apache SeaTunnel) <tyrantlucifer@apache.org>\nsub   4***R/B7****46 2022-12-28\n")),(0,r.yg)("p",null,"Note: gpg keys, which need to be remembered and used in subsequent releases."),(0,r.yg)("h4",{id:"verify-key"},"Verify Key"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"gpg --list-keys\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"/home/hadoop/.gnupg/pubring.gpg\n-------------------------------\npub   4096R/0983DF85 2022-12-28\nuid                  tyrantlucifer (The key of Apache SeaTunnel) <tyrantlucifer@apache.org>\nsub   4***R/B7****46 2022-12-28\n")),(0,r.yg)("p",null,"Tips: 0983DF85 is your public key abbreviation."),(0,r.yg)("h4",{id:"upload-the-key-to-the-public-server"},"Upload the key to the public server"),(0,r.yg)("p",null,"The public key is sent to the keyserver using the key id."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ gpg --keyserver keyserver.ubuntu.com --send-key 0983DF85\n")),(0,r.yg)("p",null,"keyserver.ubuntu.com specifies the selected keyserver.\nThis is recommended because Apache Nexus uses this keyserver for verification."),(0,r.yg)("h4",{id:"verify-that-the-key-is-uploaded-properly"},"Verify that the key is uploaded properly"),(0,r.yg)("p",null,"You can use the following two methods to verify whether the key is uploaded properly:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Command line validation")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"gpg --keyserver keyserver.ubuntu.com --search-keys 0983DF85\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Website verification\n",(0,r.yg)("a",{parentName:"li",href:"http://keyserver.ubuntu.com/"},"OpenPGP Keyserver (ubuntu.com)"),(0,r.yg)("img",{src:n(94711).A,width:"1063",height:"476"}),(0,r.yg)("img",{src:n(9573).A,width:"1102",height:"501"}),"\nTips: This screenshot is the key that has been uploaded before.\nIt is normal that the key generated in the previous step is inconsistent with that in the previous step.")),(0,r.yg)("h3",{id:"configure-maven"},"Configure maven"),(0,r.yg)("h4",{id:"create-a-master-password"},"Create a master password"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mvn --encrypt-master-password <apache password>\n")),(0,r.yg)("h4",{id:"configure-the-master-password"},"Configure the master password"),(0,r.yg)("p",null,"Add the file ",(0,r.yg)("inlineCode",{parentName:"p"},"${user.home}/.m2/settings-security.xml")," to configure the password created in the previous step."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<settingsSecurity>\n    <master>\x3c!-- Fill in the password printed in the previous step --\x3e</master>\n</settingsSecurity>\n")),(0,r.yg)("h4",{id:"encrypt-the-apache-ldap-password"},"Encrypt the Apache LDAP password"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mvn --encrypt-password <apache password>\n")),(0,r.yg)("h4",{id:"add-new-profile"},"Add new profile"),(0,r.yg)("p",null,"Edit the configuration file of your local maven environment, the general path is ",(0,r.yg)("inlineCode",{parentName:"p"},"~/.m2/setting.xml"),", and add the following xml file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<settings>\n  <servers>\n    <server>\n      <id>apache.snapshots.https</id>\n      <username> \x3c!-- APACHE LDAP USERNAME --\x3e </username>\n      <password> \x3c!-- APACHE LDAP ENCRYPTED PASSWORD, Password encrypted in the previous step --\x3e </password>\n    </server>\n    <server>\n      <id>apache.releases.https</id>\n      <username> \x3c!-- APACHE LDAP USERNAME --\x3e </username>\n      <password> \x3c!-- APACHE LDAP ENCRYPTED PASSWORD, Password encrypted in the previous step --\x3e </password>\n    </server>\n    <server>\n        <id>gpg.passphrase</id>\n        <passphrase>\x3c!-- GPG KEY PASSWORD --\x3e</passphrase>\n    </server>\n  </servers>\n</settings>\n")),(0,r.yg)("h2",{id:"project-version-preparation"},"Project version preparation"),(0,r.yg)("h3",{id:"branch-preparation"},"Branch preparation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/seatunnel-release-prepare\ncd ~/seatunnel-release-prepare\ngit clone git@github.com:apache/incubator-seatunnel.git\ncd incubator-seatunnel\ngit checkout -b ${RELEASE.VERSION}-release\n")),(0,r.yg)("h3",{id:"update-release-note"},"Update release-note"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'vim release-note.md\ngit add release-note.md\ngit commit -m "[Release][${RELEASE.VERSION}][release-note] Add release-note"\ngit push\n')),(0,r.yg)("h3",{id:"precompiled-test"},"Precompiled test"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'mvn release:prepare -Prelease -Darguments="-DskipTests -Dskip.spotless=true" -DdryRun=true -Dusername=${GITHUB USERNAME}\n')),(0,r.yg)("h3",{id:"compile"},"Compile"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'mvn release:clean\nmvn release:prepare -Prelease -Darguments="-DskipTests -Dskip.spotless=true" -DpushChanges=false -Dusername=${GITHUB USERNAME}\n')),(0,r.yg)("h3",{id:"submit-source-code"},"Submit source code"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git push\ngit push origin --tags\n")),(0,r.yg)("h3",{id:"deploy-jar-packages"},"Deploy jar packages"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Upload jar packages")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'mvn release:perform -Prelease -Darguments="-DskipTests -Dskip.spotless=true" -Dusername=${GITHUB USERNAME}\n')),(0,r.yg)("p",null,"Note: During the execution of this command, ensure that the IP address remains constant; otherwise, multiple unusable repositories might appear in stagingRepositories."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Close the stage repository\n",(0,r.yg)("a",{parentName:"li",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories"),(0,r.yg)("img",{src:n(67161).A,width:"2920",height:"551"}))),(0,r.yg)("h2",{id:"upload-to-svn"},"Upload to SVN"),(0,r.yg)("h3",{id:"pull-the-release-and-dev-repositories-to-the-local"},"Pull the release and dev repositories to the local"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/seatunnel-release-prepare/dev\nmkdir -p ~/seatunnel-release-prepare/release\ncd ~/seatunnel-release-prepare/dev\nsvn --username=${APACHE LDAP username} co https://dist.apache.org/repos/dist/dev/seatunnel\ncd ~/seatunnel-release-prepare/release\nsvn --username=${APACHE LDAP username} co https://dist.apache.org/repos/dist/release/seatunnel\n")),(0,r.yg)("h3",{id:"upload-the-key-to-the-dev-and-release-repositories"},"Upload the key to the dev and release repositories"),(0,r.yg)("p",null,"Tips: Only the first Release Manager needs to do this step."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'cd ~/seatunnel-release-prepare/dev/seatunnel\ngpg -a --export ${GPG USERNAME} >> KEYS\nsvn add KEYS\nsvn --username=${APACHE LDAP USERNAME} commit -m "Add ${APACHE LDAP USERNAME} GPG key"\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'cd ~/seatunnel-release-prepare/release/seatunnel\ngpg -a --export ${GPG USERNAME} >> KEYS\nsvn add KEYS\nsvn --username=${APACHE LDAP USERNAME} commit -m "Add ${APACHE LDAP USERNAME} GPG key"\n')),(0,r.yg)("h3",{id:"upload-source-code-and-binary-packages-to-the-dev-repository"},"Upload source code and binary packages to the dev repository"),(0,r.yg)("h4",{id:"copy-source-code-and-binary-packages"},"Copy source code and binary packages"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/seatunnel-release-prepare/dev/seatunnel/${RELEASE.VERSION}\ncp -f ~/seatunnel-release-prepare/seatunnel/seatunnel-dist/target/*.tar.gz ~/seatunnel-release-prepare/dev/seatunnel/${RELEASE.VERSION}\ncd ~/seatunnel-release-prepare/dev/seatunnel/${RELEASE.VERSION}\n")),(0,r.yg)("h4",{id:"generate-signature"},"Generate signature"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"shasum -a 512 apache-seatunnel-${RELEASE.VERSION}-src.tar.gz >> apache-seatunnel-${RELEASE.VERSION}-src.tar.gz.sha512\nshasum -b -a 512 apache-seatunnel-${RELEASE.VERSION}-bin.tar.gz >> apache-seatunnel-${RELEASE.VERSION}-bin.tar.gz.sha512\n")),(0,r.yg)("h4",{id:"generate-gpg-signature"},"Generate GPG signature"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"gpg --armor --detach-sig apache-seatunnel-${RELEASE.VERSION}-src.tar.gz\ngpg --armor --detach-sig apache-seatunnel-${RELEASE.VERSION}-bin.tar.gz\n")),(0,r.yg)("h4",{id:"check-file-signature"},"Check file signature"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"shasum -c apache-seatunnel-${RELEASE.VERSION}-src.tar.gz.sha512\nshasum -c apache-seatunnel-${RELEASE.VERSION}-bin.tar.gz.sha512\n")),(0,r.yg)("h4",{id:"check-digital-signatures"},"Check digital signatures"),(0,r.yg)("p",null,"step1: Import (Release Manager does not need to do this step)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl https://dist.apache.org/repos/dist/dev/seatunnel/KEYS >> KEYS\ngpg --import KEYS\ngpg --edit-key \"${GPG username of releaser}\"\n  > trust\n\nPlease decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)\n\n  1 = I don't know or won't say\n  2 = I do NOT trust\n  3 = I trust marginally\n  4 = I trust fully\n  5 = I trust ultimately\n  m = back to the main menu\n\nYour decision? 5\n\n  > save\n")),(0,r.yg)("p",null,"step2: Check the gpg digital signature"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"gpg --verify apache-seatunnel-${RELEASE.VERSION}-src.tar.gz.asc apache-seatunnel-${RELEASE.VERSION}-src.tar.gz\ngpg --verify apache-seatunnel-${RELEASE.VERSION}-bin.tar.gz.asc apache-seatunnel-${RELEASE.VERSION}-bin.tar.gz\n")),(0,r.yg)("h4",{id:"commit"},"Commit"),(0,r.yg)("p",null,"Commit all files to the dev repository."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'cd ..\nsvn add ${RELEASE.VERSION}\nsvn --username=${APACHE LDAP USERNAME} commit -m "release ${RELEASE.VERSION}"\n')),(0,r.yg)("h2",{id:"vote-by-mail"},"Vote by mail"),(0,r.yg)("h3",{id:"devseatunnelapacheorg-voting"},(0,r.yg)("a",{parentName:"h3",href:"mailto:dev@seatunnel.apache.org"},"dev@seatunnel.apache.org")," Voting"),(0,r.yg)("h4",{id:"voting-initiate"},"Voting initiate"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"[VOTE] Release Apache SeaTunnel 2.3.3\n\nHello SeaTunnel Community,\n\nThis is a call for vote to release Apache SeaTunnel version 2.3.3\n\nRelease notes:\nhttps://github.com/apache/seatunnel/blob/2.3.3/release-note.md\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/seatunnel/2.3.3 \n\nGit tag for the release:\nhttps://github.com/apache/seatunnel/tree/2.3.3\n\nMaven 2 staging repository:\nhttps://repository.apache.org/content/repositories/orgapacheseatunnel-1015/org/apache/seatunnel/\n\nRelease Commit ID:\nhttps://github.com/apache/seatunnel/commit/6977e9f10ff766944a925ddaae31ea9a8ca3bfef\n\nKeys to verify the Release Candidate: \nhttps://downloads.apache.org/seatunnel/KEYS\n \nThe vote will be open for at least 72 hours or until necessary numbers of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n\n[ ] +0 no opinion\n\n[ ] -1 disapprove with the reason\n\nChecklist for reference:\n\n[ ] Download links are valid.\n\n[ ] Checksums and PGP signatures are valid.\n\n[ ] Source code artifacts have correct names matching the current release.\n\n[ ] LICENSE and NOTICE files are correct for each SeaTunnel repo.\n\n[ ] All files have license headers if necessary.\n\n[ ] No compiled archives bundled in source archive.\n\nMore detail checklist please refer:\nhttps://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist\n\n\n--\n\nBest Regards\nChao Tian\n")),(0,r.yg)("h4",{id:"voting-close"},"Voting close"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"[VOTE] Release Apache SeaTunnel 2.3.3\n\nHi SeaTunnel Community,\n\nThanks, everyone, I will close this vote thread and the results will be tallied.\n\nBest wishes!\nChao Tian\n#### \u5f52\u7968\n[RESULT] [VOTE] Release Apache SeaTunnel 2.3.3\n\nHi SeaTunnel community,\n\nThis vote now closes since 72 hours have passed.\n\nThe vote PASSES with\n\n3 (+1 binding) votes from the IPMC,\nDavid,\nGuo Wei,\nCalvin Kirs  \n\n6 (+1 non-binding) votes from the developer from the community\n\nJun Gao, \nTaoZex, \nhailin0,\nPeng Yuan,\nZongwen Li,\nGuangdong Liu\nand no further 0 or -1 votes.\n\n\nThe vote thread: \n\nhttps://lists.apache.org/thread/98oc6q6vghlg8qpfyf5yttzy925tfp9g \n\n\nThanks for your participation, I will now bring the vote to\n[general@incubator.apache.org](mailto:general@incubator.apache.org) <mailto:\n[general@incubator.apache.org](mailto:general@incubator.apache.org)> to get\napproval by the IPMC.\nIf this vote passes also, the release is accepted and will be published.\n\nBest wishes,\nChao Tian\n")),(0,r.yg)("h2",{id:"official-release"},"Official Release"),(0,r.yg)("h3",{id:"moving-files"},"Moving files"),(0,r.yg)("p",null,"Moving files from the dev repository to the release repository."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"svn mv https://dist.apache.org/repos/dist/dev/incubator/seatunnel/${RELEASE.VERSION} https://dist.apache.org/repos/dist/release/incubator/seatunnel/\n")),(0,r.yg)("h3",{id:"release-maven-repository"},"Release Maven Repository"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(23261).A,width:"2820",height:"576"})),(0,r.yg)("h3",{id:"send-notification-email"},"Send notification email"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"dev@seatunnel.apache.org"},"dev@seatunnel.apache.org"),"\n",(0,r.yg)("a",{parentName:"p",href:"announce@apache.org"},"announce@apache.org")),(0,r.yg)("p",null,"Please note that you should send emails in plain text mode, otherwise they will be rejected by Apache's email server."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"Hi all,\n\nWe are glad to announce the release of Apache SeaTunnel 2.3.3.\n\nOnce again I would like to express my thanks to your help.\n\nSeaTunnel: SeaTunnel is a distributed, high-performance data integration tool for the synchronization and transformation of massive\ndata (offline & real-time).\n\nApache SeaTunnel website: \n\nhttp://seatunnel.apache.org/\n\nDownloads: \n\nhttps://seatunnel.apache.org/download/\n\nRelease Notes:\n\nhttps://github.com/apache/seatunnel/blob/2.3.3/release-note.md\n\nDocuments: \n\nhttps://seatunnel.apache.org/docs/2.3.3/about/\n\nTwitter: \n\nhttps://twitter.com/ASFSeaTunnel\n\nSeaTunnel Resources:\n- GitHub: https://github.com/apache/seatunnel\n- Issue: https://github.com/apache/seatunnel/issues\n- Mailing list: dev@seatunnel.apache.org\n\n- Apache SeaTunnel Team\n")))}c.isMDXComponent=!0},94711:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/20221228223258-342b2060bf5edc66afd0e90752fe621f.png"},9573:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/20221228223313-e3f46e6926c683c961a5280b30ae7ae0.png"},67161:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/20221228225445-29ee9184ea2d8bf600dda40b95c49ed8.png"},23261:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/20221228232210-508912952311e605f877f38ea3c4d309.png"}}]);