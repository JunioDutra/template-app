package br.com.cms.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.cms.model.Posts;

@RepositoryRestResource(collectionResourceRel = "posts", path = "posts")
@CrossOrigin(origins = "*")
public interface PostsRepository extends CrudRepository<Posts, Long> {
    
}
