terraform {
  required_version = ">= 1.7.0"
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "app" {
  name = "td-migrationbridge-be-nodejs:latest"
  build {
    context    = "."
    dockerfile = "infra/Dockerfile"
  }
}

resource "docker_container" "app" {
  name  = "td-migrationbridge-be-nodejs-container"
  image = docker_image.app.image_id
  ports {
    internal = 3000
    external = 3000
  }
}
