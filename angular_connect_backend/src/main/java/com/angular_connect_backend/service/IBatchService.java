package com.angular_connect_backend.service;

import com.angular_connect_backend.model.Batch;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBatchService {
    Page<Batch> findAllBatch(Pageable pageable);
}
