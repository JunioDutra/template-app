package br.com.cms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import br.com.cms.model.Posts;

@Configuration
@SpringBootApplication
public class CmsApplication implements RepositoryRestConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(CmsApplication.class, args);
	}

	@Override
	public void configureRepositoryRestConfiguration(
			RepositoryRestConfiguration config, CorsRegistry cors) {
		config.exposeIdsFor(Posts.class);
	}
}
