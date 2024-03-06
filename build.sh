#!/bin/bash

docker build -t inferix-lp .
docker tag inferix-lp registry.house3d.net/outsource/inferix-lp:v1.30
docker push registry.house3d.net/outsource/inferix-lp:v1.30