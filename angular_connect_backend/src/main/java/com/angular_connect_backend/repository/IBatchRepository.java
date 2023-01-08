package com.angular_connect_backend.repository;

import com.angular_connect_backend.model.Batch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBatchRepository extends JpaRepository<Batch, Integer> {
}
