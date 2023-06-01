##
## This does work on a MAC ARM
##
FROM mcr.microsoft.com/powershell:latest

# Install system components
#RUN apt update  &&  apt install -y curl gnupg apt-transport-https

# Import the public repository GPG keys
#RUN curl https://packages.microsoft.com/keys/microsoft.asc |  apt-key add -

# Register the Microsoft Product feed
#RUN sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-debian-bullseye-prod bullseye main" > /etc/apt/sources.list.d/microsoft.list'

# Install PowerShell
#RUN apt update && apt install -y powershell


RUN pwsh -c "Install-Module -Name ExchangeOnlineManagement -force"
# RUN pwsh -c "Install-Module -Name Microsoft.PowerApps.Administration.PowerShell -force"
# RUN pwsh -c "Install-Module -Name Microsoft.PowerApps.PowerShell -AllowClobber -force"

#FROM node:16 AS build
COPY ./src .


ENTRYPOINT ["tail", "-f", "/dev/null"]