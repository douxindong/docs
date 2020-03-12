#  Django
 ---
## mac安装
```
git clone https://github.com/django/django.git
```
安装
进入解压后的目录：
```
cd Django-x.x.y
sudo python setup.py install
```
安装成功后会输出以下信息：
```
……
Processing dependencies for Django==x.x.y
Finished processing dependencies for Django==x.x.y
```
再进入我们的站点目录，创建 Django 项目：
```
$ django-admin.py startproject testdj
```
启动服务：
```
cd testdj # 切换到我们创建的项目
$ python manage.py runserver
```
```
……
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```
## 创建项目

- Python 3.8.2
- Django 3.1

使用 django-admin 来创建 HelloWorld 项目：
```
django-admin startproject python1
```
创建完成后我们可以查看下项目的目录结构：
```
$ cd python1/
$ tree
.
|-- python1
|   |-- __init__.py
|   |-- settings.py
|   |-- urls.py
|   `-- wsgi.py
`-- manage.py
```

目录说明：
```
python1: 项目的容器。
manage.py: 一个实用的命令行工具，可让你以各种方式与该 Django 项目进行交互。
HelloWorld/__init__.py: 一个空文件，告诉 Python 该目录是一个 Python 包。
HelloWorld/settings.py: 该 Django 项目的设置/配置。
HelloWorld/urls.py: 该 Django 项目的 URL 声明; 一份由 Django 驱动的网站"目录"。
HelloWorld/wsgi.py: 一个 WSGI 兼容的 Web 服务器的入口，以便运行你的项目。
以上信息说明，项目已启动，访问地址为http://127.0.0.1:8000/。
```
接下来我们进入 python1 目录输入以下命令，启动服务器：
```
python3 manage.py runserver 0.0.0.0:8000
```
0.0.0.0 让其它电脑可连接到开发服务器，8000 为端口号。如果不说明，那么端口号默认为 8000。

在浏览器输入你服务器的 ip（这里我们输入本机 IP 地址： 127.0.0.1:8000） 及端口号，如果正常启动，输出结果如下：
>![](https://www.runoob.com/wp-content/uploads/2015/01/E14003EA-4F49-4931-91F4-D3C0C0247EF1.jpg)

https://www.runoob.com/django/django-first-app.html
## 遇到的第一个小问题
```
'DIRS': [BASE_DIR+"/templates",],       # 修改为
这样时报错的：
TypeError: unsupported operand type(s) for +: 'PosixPath' and 'str'
```
## 解决
网上的做法是
```
'DIRS': [os.path.join(BASE_DIR, 'templates')], 
```
没什么用
最终在终端
cd python1
...
查看
最终pwd
```
/Users/lifevc/Desktop/python1/python1/templates/hello.html
```
原来是路径里多了个python1
`'DIRS': ['HelloWorld/templates'],`这么一改就好了。




