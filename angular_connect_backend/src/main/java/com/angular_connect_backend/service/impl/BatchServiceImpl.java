package com.angular_connect_backend.service.impl;

import com.angular_connect_backend.model.Batch;
import com.angular_connect_backend.repository.IBatchRepository;
import com.angular_connect_backend.service.IBatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BatchServiceImpl implements IBatchService {
    @Autowired
    private IBatchRepository batchRepository;
    @Override
    public Page<Batch> findAllBatch(Pageable pageable) {
        return batchRepository.findAll(pageable);
    }
}
