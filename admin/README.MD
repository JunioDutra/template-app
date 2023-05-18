### upload package

```shell
curl --user your_username:your_password_or_token \
     --upload-file path/to/file.bin \
     https://gitea.example.com/api/packages/testuser/generic/test_package/1.0.0/file.bin
```

### download package

```shell
curl https://git.dblsoft.xyz/api/packages/juniodbl/generic/deploy/1.0.0/deploy.zip
```


- PASTA para fazer o upload
    - /opt/bitnami/nginx/html