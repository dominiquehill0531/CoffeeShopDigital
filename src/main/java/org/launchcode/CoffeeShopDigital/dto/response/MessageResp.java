package org.launchcode.CoffeeShopDigital.dto.response;

public class MessageResp {
    private String message;

    public MessageResp(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
