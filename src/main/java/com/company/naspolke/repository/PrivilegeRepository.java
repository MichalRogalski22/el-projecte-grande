package com.company.naspolke.repository;

import com.company.naspolke.model.Privilege;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrivilegeRepository extends JpaRepository<Privilege, Integer> {

    Privilege findByName(String name);
}
