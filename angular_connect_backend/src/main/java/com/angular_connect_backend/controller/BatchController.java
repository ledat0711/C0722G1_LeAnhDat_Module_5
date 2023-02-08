package com.angular_connect_backend.controller;

import com.angular_connect_backend.model.Batch;
import com.angular_connect_backend.service.IBatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200/")
public class BatchController {
    @Autowired
    private IBatchService batchService;
    @GetMapping("/batch")
    public ResponseEntity<Page<Batch>> getBatchListPage(Pageable pageable) {
        Page<Batch> batchList = batchService.findAllBatch(pageable);
        if (batchList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(batchList, HttpStatus.OK);
    }
}
