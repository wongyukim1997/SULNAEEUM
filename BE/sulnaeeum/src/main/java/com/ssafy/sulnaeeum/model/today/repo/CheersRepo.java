package com.ssafy.sulnaeeum.model.today.repo;

import com.ssafy.sulnaeeum.model.today.entity.Cheers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheersRepo extends JpaRepository<Cheers, Long>{
}
