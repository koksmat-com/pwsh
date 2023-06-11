$recepients = Get-EXORecipientPermission -ResultSize Unlimited 
|  Where-Object { ($_.Trustee -like '*@*') }
