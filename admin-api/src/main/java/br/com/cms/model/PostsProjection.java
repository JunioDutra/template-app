package br.com.cms.model;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "postsProjection", types = { Posts.class })
public interface PostsProjection {
    Long getId();
    String getTitle();
    String getContent();
}
