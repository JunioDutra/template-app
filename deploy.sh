#!/bin/bash

# Source and destination folders
source_folder="dist/"
destination_folder="/opt/bitnami/nginx/html"

# SSH details
ssh_username="bitnami"
ssh_hostname="3.215.122.7"
ssh_keyfile="~/.ssh/aws-light-sail.pem"

# Sync folders using rsync over SSH
rsync -avz -e "ssh -i $ssh_keyfile" "$source_folder" "$ssh_username@$ssh_hostname:$destination_folder"