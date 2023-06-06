FROM mcr.microsoft.com/powershell:latest

RUN pwsh -c "Install-Module -Name ExchangeOnlineManagement -force"

WORKDIR /usr/src/app

COPY src .

ENTRYPOINT ["pwsh",  "downloadRecipients.ps1"]