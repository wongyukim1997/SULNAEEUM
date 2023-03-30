package com.ssafy.sulnaeeum.model.drink.repo;

import com.ssafy.sulnaeeum.model.drink.entity.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DishRepo extends JpaRepository<Dish, Long> {

    // 해당 술에 어울리는 안주 이름 조회
    @Query(value = "select dish_name from dish where dish_id in (select dish_id from dish_drink where drink_id =?1)", nativeQuery = true)
    String findDishName(Long drinkId);

    @Query(value = "select dish_category from dish where dish_name = ?1", nativeQuery = true)
    String findByDishName(String dishName);
}
