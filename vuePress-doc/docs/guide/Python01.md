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

...

## 后端Django + 前端Vue.js快速搭建web项目

本篇使用Vue.js作为前端框架，代替Django本身较为孱弱的模板引擎，Django则作为服务端提供api接口，使得前后端实现完全分离，更适合单页应用的开发构建。


### 一、 环境准备
```
安装环境：
Django系：
Python 3.6 +
Django 1.11.13
Mysql 5.7
Python的MySQL相关模块等
推荐python相关的模块（包括Django）都使用python自带的pip安装器安装。
命令：pip install django即可安装最新版本的django,或者pip install django==1.11.13安装指定版本
Vue.js系：
Node.js 8.11.2
```
有关Vue的模块(包括vue)可以使用node自带的npm包管理器安装。推荐使用淘宝的 cnpm  命令行工具代替默认的 npm
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
### 二、 构建Django项目

我们首先使用Django来搭建web后端api框架。

1、 先在终端敲入命令：
```
django-admin startproject myproject
```
目录结构：

![](https://blog-10039692.file.myqcloud.com/1501639985076_5303_1501639985364.png)

2、 进入项目根目录，创建一个app：
```
python manage.py startapp myapp
```
目录结构：

![](https://blog-10039692.file.myqcloud.com/1501640076711_5626_1501640077083.png)
3、 在myproject下的settings.py配置文件中，把默认的sqllite3数据库换成我们的mysql数据库：
```
# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases     
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'testcon',
            'USER': 'root',
            'PASSWORD': '123456',
            'HOST': '127.0.0.1',
        }
    }
```
并把app加入到installed_apps列表里：
```
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
         'myapp',
    ]
```
4、 在app目录下的models.py里我们简单写一个model如下
```
    # -*- coding: utf-8 -*-
    from __future__ import unicode_literals
     
    from django.db import models
     
    # Create your models here.
    class Book(models.Model):
        book_name = models.CharField(max_length=64)
        add_time = models.DateTimeField(auto_now_add=True)
     
        def __unicode__(self):
            return self.book_name
```
