package com.company.naspolke.repository;

import com.company.naspolke.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CompanyRepository extends JpaRepository<Company, UUID> {
    Company findByKRSNumber(Long krsNumber);
}