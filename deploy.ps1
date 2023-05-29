# Source and destination folders
$sourceFolder = "dist/*"
$destinationFolder = "/opt/bitnami/nginx/html"

# SSH details
$sshUsername = "bitnami"
$sshHostname = "3.215.122.7"
$sshKeyfile = "~/.ssh/aws-light-sail.pem"

# Construct the SSH command
$sshCommand = "ssh -i $sshKeyfile $sshUsername@$sshHostname"

# Sync folders using SCP
$scpCommand = "scp -r -i $sshKeyfile $sourceFolder $sshUsername@${sshHostname}:${destinationFolder}"
Invoke-Expression -Command $scpCommand
