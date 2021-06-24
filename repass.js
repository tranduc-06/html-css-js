function Chapnhan()
{
    var hoten = document.getElementById("hoten").value;
    var ngaysinh = document.getElementById("ngaysinh").value;
    var email = document.getElementById("email").value;
    var tensudung = document.getElementById("tensudung").value;
    var password = document.getElementById("pass").value;
    var repass = document.getElementById("repass").value;
    if(hoten == "")
    {
        document.getElementById("loi_hoten").innerHTML = "Quý vị chưa nhập họ tên";
    }
    else
    {
        document.getElementById("loi_hoten").innerHTML = "";
    }

   

    if(ngaysinh == "")
    {
        document.getElementById("loi_ngaysinh").innerHTML = "Quý vị chưa nhập ngày sinh";
    }
    else
    {
        document.getElementById("loi_ngaysinh").innerHTML = " ";

    } 



    if(email == "")
    {
        document.getElementById("loi_email").innerHTML = "Quý vị chưa nhập email";
    }
    else
    {
        document.getElementById("loi_email").innerHTML = "";
    }



    
    if(tensudung == "")
    {
        document.getElementById("loi_ten").innerHTML = "Quý vị chưa nhập tên sử dụng";
    }
    else
    {
        document.getElementById("loi_ten").innerHTML = "";
    }

    if(password == "")
    {
        document.getElementById("loi_pass").innerHTML = "Quý vị chưa nhập mật khẩu";
    }
    else
    {
        document.getElementById("loi_ten").innerHTML = "";
    }

    if(repass == "")
    {
        document.getElementById("loi_pass").innerHTML = "Quý vị chưa nhập lại mật khẩu";
    }
    else
    {
        document.getElementById("loi_pass").innerHTML="";
    }
}