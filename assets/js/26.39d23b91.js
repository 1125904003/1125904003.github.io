(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{311:function(t,e,s){"use strict";s.r(e);var a=s(12),n=Object(a.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"bat命令学习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bat命令学习"}},[this._v("#")]),this._v(" Bat命令学习")]),this._v(" "),t("h2",{attrs:{id:"bat文件下的文件剪贴案列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bat文件下的文件剪贴案列"}},[this._v("#")]),this._v(" Bat文件下的文件剪贴案列")]),this._v(" "),t("div",{staticClass:"language-bat extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('@echo off\n\nrem 获取当前日期\nfor /f "tokens=1-3 delims=/" %%d in ("%date%") do (\n  set "year=%%f"\n  set "month=%%e"\n  set "day=%%d"\n)\n\nrem 去除月份和日期中的前导零\nif "%month:~0,1%"=="0" set "month=%month:~1%"\nif "%day:~0,1%"=="0" set "day=%day:~1%"\n\nrem 创建目标目录\nset "dest_folder=F:\\test\\file2\\%month%.%day%"\nmkdir "%dest_folder%"\n\nrem 将源文件夹中的所有文件移动到新创建的目标文件夹中\nset "source_folder=C:\\Users\\Luhuan\\Desktop\\file1"\nmove /y "%source_folder%\\*" "%dest_folder%"\npause\n')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);