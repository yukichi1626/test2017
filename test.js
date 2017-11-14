$(function(){
	var PI = {
		onReady: function() {
			PI.initModelList($("#selectModel"));
			$("#btnGetResult").click(PI.getResult);
			$("#selectModel").change(PI.settingSelect);			
			$("#mold_cd").change(PI.getMasterMeasure);
			$("#btnOutput").click(PI.outputMeasureSql)
		},
		getResult: function() {
			var postObj = {};
			if ($("#selectModel").val() != "") {
				if (isNaN($("#inputFootSize").val())||isNaN($("#inputFootBreadth").val())||isNaN($("#inputFootWidth").val())||$("#inputFootSize").val()==""||$("#inputFootBreadth").val()==""||$("#inputFootWidth").val()=="") {
					alert("正しい数値を入力してください");
					return false;
				} else {
					postObj["model_cd"] = $("#selectModel").val();
					postObj["foot_size"] = $("#inputFootSize").val();
					postObj["foot_breadth"] = $("#inputFootBreadth").val();
					postObj["foot_width"] = $("#inputFootWidth").val();
					postObj["chkFormula"] = '1';
					$.post(
						"./measure/measurement.php",
						postObj,
						function(data) {
							$("#area_result").html(data);
						}
					);
				}
			} else {
				alert("モデルを選択してください。");
			}
		},
		initModelList: function(obj){
			obj.load("./measure/model_list.php");
			return;
		},
		initSelectFootSize: function() {
			var postObj = {};
			postObj["model_cd"] = $("#selectModel").val();
			postObj["scale_cd"] = "01";
			$("#inputFootSize").children().remove();
			$("#inputFootSize").load(
				"./measure/option_list.php"
				,postObj
				,function() {
					$(this).val(24.0);
				}
			);
		},
		initSelectFootBreadth: function() {
			var postObj = {};
			postObj["model_cd"] = $("#selectModel").val();
			postObj["scale_cd"] = "02";
			$("#inputFootBreadth").children().remove();
			$("#inputFootBreadth").load(
				"./measure/option_list.php"
				,postObj
				,function() {
					$(this).val(10.0);
				}
			);
		},
		initSelectFootWidth: function() {
			var postObj = {};
			postObj["model_cd"] = $("#selectModel").val();
			postObj["scale_cd"] = "03";
			$("#inputFootWidth").children().remove();
			$("#inputFootWidth").load(
				"./measure/option_list.php"
				,postObj
				,function() {
					$(this).val(24.0);
				}
			);
		},
		settingSelect: function(){
			$("#area_result").html('');
			PI.initSelectFootSize();
			PI.initSelectFootBreadth();
			PI.initSelectFootWidth();
		}	
	};
	PI.onReady();
});

