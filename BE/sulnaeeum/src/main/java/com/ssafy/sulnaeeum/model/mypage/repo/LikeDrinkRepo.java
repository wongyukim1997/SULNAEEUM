package com.ssafy.sulnaeeum.model.mypage.repo;

import com.ssafy.sulnaeeum.model.mypage.entity.LikeDrink;
import com.ssafy.sulnaeeum.model.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LikeDrinkRepo extends JpaRepository<LikeDrink, Long> {

    // 해당하는 술을 해당하는 회원이 찜 했는지 여부 확인
    @Query(value = "select * from like_drink where drink_id = ?1 and user_id = ?2", nativeQuery = true)
    Optional<LikeDrink> findLikeInfo(Long drinkId, Long userId);

    @Query(value = "select * from like_drink where user_id = ?1", nativeQuery = true)
    List<LikeDrink> findByUserId(Long userId);
}
