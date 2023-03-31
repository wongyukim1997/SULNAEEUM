package com.ssafy.sulnaeeum.model.rabbitmq.service;

import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ProducerService {

    private final RabbitTemplate rabbitTemplate;

    public void sendMessage(Map<String, List> params) {
        rabbitTemplate.convertAndSend("sulnaeeum.exchange", "sulnaeeum.key", params);
    }
}
