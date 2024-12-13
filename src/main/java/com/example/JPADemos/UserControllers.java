package com.example.JPADemos;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserControllers {
    @Autowired
    UserRepo repo;

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @RequestMapping(value = "/getdata" , method = RequestMethod.GET)
    public List<Userdata> GetData(){
        return repo.findAll();
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @RequestMapping(value = "/getUserHistory" , method = RequestMethod.GET)
    public List<Userdata> GetUserHistory(@RequestParam long num){
        return repo.findByNumber(num);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @RequestMapping(value = "/setdata", method = RequestMethod.POST)
    public String setUserData(@RequestBody Userdata userdata) {
        repo.save(userdata);
        return "User data saved successfully!";
    }

}
