package com.company.naspolke.service;

import com.company.naspolke.model.AppUser;
import com.company.naspolke.model.Company;
import com.company.naspolke.model.Role;
import com.company.naspolke.model.types.RoleType;

import java.util.UUID;

public interface CompanyUserRoleService {
    RoleType checkAppUserRoleTypeInCompany(UUID companyId, UUID userId);
    void addNewMemberToCompany(Company company, AppUser appUser, Role role);
    void changeMemberRoleInCompany(Company company, AppUser appUser, Role role);
    void deleteMemberFromCompany(Company company, AppUser appUser);
}
