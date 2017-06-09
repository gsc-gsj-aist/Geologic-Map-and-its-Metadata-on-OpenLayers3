				// 地域と図幅の選択 プルダウンメニュー 
$(function(){
	for (var i in mapList){
		$("#select_district").append('<option value="' + mapList[i].district + '">' + mapList[i].district +'</option>');
		$("#select_district").removeAttr("disabled");
	}
	$("#select_district").change(function(){
		$("#select_sheet").empty();
		for (var i in mapList){
			if(mapList[i].district == $(this).val()){
				for (var j in mapList[i].sheet){
					$("#select_sheet").append('<option value="' + mapList[i].sheet[j].c_1 + '">' + mapList[i].sheet[j].c_1 + " "  + mapList[i].sheet[j].c_2 + " " + mapList[i].sheet[j].c_3 +'</option>');
				}
			}
		}
		if($(this).val()){
			$("#select_sheet").removeAttr("disabled");
		} else {
		$("#select_sheet").append('<option value="">最初に上の地域を選択　　　　　</option>');
			$("#select_sheet").attr("disabled", "disabled");
		}
	});
});
var mapList = [
	{ "district": "東京 Tokyo",
	"sheet": [{"c_1":"08029","c_2":"鴻巣","c_3":"Konosu"},{"c_1":"08063","c_2":"東京西北部","c_3":"Tokyo-Seinambu"},{"c_1":"08074","c_2":"横浜","c_3":"Yokohama"},{"c_1":"08075","c_2":"木更津","c_3":"Kisarazu"},{"c_1":"08076","c_2":"姉崎","c_3":"Anesaki"},{"c_1":"08079","c_2":"南部","c_3":"Nanbu"},{"c_1":"08084","c_2":"横須賀","c_3":"Yokosuka"},{"c_1":"08085","c_2":"富津","c_3":"Futtsu"},{"c_1":"08092","c_2":"熱海","c_3":"Atami"},{"c_1":"08093","c_2":"三崎","c_3":"Misaki"},{"c_1":"08094","c_2":"那古","c_3":"Nako"},{"c_1":"08095","c_2":"鴨川","c_3":"Kamogawa"},{"c_1":"08100","c_2":"修善寺","c_3":"Shuzenji"},{"c_1":"08101","c_2":"伊東","c_3":"Ito"},{"c_1":"08102","c_2":"館山","c_3":"Tateyama"},{"c_1":"08105","c_2":"下田","c_3":"Shimoda"},{"c_1":"08106","c_2":"稲取","c_3":"Inatori"},{"c_1":"08107","c_2":"大島","c_3":"Oshima"},{"c_1":"08109","c_2":"神子元島","c_3":"Mikomotojima"},{"c_1":"08110","c_2":"利島","c_3":"Toshima"}]
	},
	{ "district": "八丈島　Hachijo Jima", 
	"sheet": [{"c_1":"09001","c_2":"新島","c_3":"Nii-Jima"},{"c_1":"09002","c_2":"神津島","c_3":"Kozu-Shima"},{"c_1":"09003","c_2":"三宅島","c_3":"Miyake-Jima"}]
	},
	{ "district": "金沢 Kanazawa", 
	"sheet": [{"c_1":"10013","c_2":"小口瀬戸","c_3":"Koguchiseto"},{"c_1":"10015","c_2":"邑知潟","c_3":"Ochigata"},{"c_1":"10016","c_2":"虻ガ島","c_3":"Abugashima"},{"c_1":"10017","c_2":"三日市","c_3":"Mikkaichi"},{"c_1":"10020","c_2":"津幡","c_3":"Tsubata"},{"c_1":"10021","c_2":"石動","c_3":"Isurugi"},{"c_1":"10022","c_2":"富山","c_3":"Toyama"},{"c_1":"10023","c_2":"魚津","c_3":"Uozu"},{"c_1":"10026","c_2":"金沢","c_3":"Kanazawa"},{"c_1":"10027","c_2":"城端","c_3":"Johana"},{"c_1":"10028","c_2":"八尾","c_3":"Yatsuo"},{"c_1":"10035","c_2":"白木峰","c_3":"Shirokimine"},{"c_1":"10051","c_2":"三日町","c_3":"Mikkamachi"},{"c_1":"10065","c_2":"冠島","c_3":"Kammurijima"},{"c_1":"10075","c_2":"宮津","c_3":"Miyazu"},{"c_1":"10076","c_2":"丹後由良","c_3":"Tangoyura"},{"c_1":"10077","c_2":"鋸崎","c_3":"Nokogirizaki"},{"c_1":"10078","c_2":"西津","c_3":"Nishizu"},{"c_1":"10079","c_2":"敦賀","c_3":"Tsuruga"},{"c_1":"10080","c_2":"横山","c_3":"Yokoyama"}]
	},
	{ "district": "京都 Kyoto", 
	"sheet": [{"c_1":"11004","c_2":"熊川","c_3":"Kumagawa"},{"c_1":"11005","c_2":"竹生島","c_3":"Chikubu shima"},{"c_1":"11006","c_2":"近江長浜","c_3":"Ominagahama"},{"c_1":"11007","c_2":"大垣","c_3":"Ogaki"},{"c_1":"11008","c_2":"岐阜","c_3":"Gifu"},{"c_1":"11018","c_2":"彦根東部","c_3":"Hikonetobu"},{"c_1":"11019","c_2":"津島","c_3":"Tsushima"},{"c_1":"11020","c_2":"名古屋北部","c_3":"Nagoya-Hokubu"},{"c_1":"11030","c_2":"御在所山","c_3":"Gozaisho Yama"},{"c_1":"11031","c_2":"桑名","c_3":"Kuwana"},{"c_1":"11032","c_2":"名古屋南部","c_3":"Nagoya-Nambu"},{"c_1":"11037","c_2":"三田","c_3":"Sanda"},{"c_1":"11038","c_2":"広根","c_3":"Hirone"},{"c_1":"11039","c_2":"京都西南部","c_3":"Kyoto-Seinambu"},{"c_1":"11042","c_2":"亀山","c_3":"Kameyama"},{"c_1":"11043","c_2":"四日市","c_3":"Yokkaichi"},{"c_1":"11044","c_2":"半田","c_3":"Handa"},{"c_1":"11049","c_2":"神戸","c_3":"Kobe"},{"c_1":"11050","c_2":"大阪西北部　","c_3":"Osaka-Seihokubu"},{"c_1":"11051","c_2":"大阪東北部","c_3":"Osaka-Tohokubu"},{"c_1":"11052","c_2":"奈良","c_3":"Nara"},{"c_1":"11054","c_2":"津西部","c_3":"Tsu-Seibu"},{"c_1":"11055","c_2":"津東部","c_3":"Tsu-Toubu"},{"c_1":"11056","c_2":"師崎","c_3":"Morozaki"},{"c_1":"11062","c_2":"大阪西南部","c_3":"Osaka-Seinambu"},{"c_1":"11063","c_2":"大阪東南部","c_3":"Osaka-Tonambu"},{"c_1":"11064","c_2":"桜井","c_3":"Sakurai"}]
	},
	{ "district": "高知　Kochi", 
	"sheet": [{"c_1":"13041","c_2":"三島","c_3":"Mishima"},{"c_1":"13042","c_2":"川口","c_3":"Kawaguchi"},{"c_1":"13052","c_2":"日比原","c_3":"Hibihara"},{"c_1":"13062","c_2":"伊野","c_3":"Ino"},{"c_1":"13068","c_2":"八幡浜","c_3":"Yawatahama"},{"c_1":"13076","c_2":"伊予高山","c_3":"Iyo-takayama"},{"c_1":"13077","c_2":"宇和島","c_3":"Uwajima"},{"c_1":"13088","c_2":"伊予鹿島","c_3":"Iyo-kashima"},{"c_1":"13089","c_2":"宿毛","c_3":"Sukumo"}]
	},
	{ "district": "福岡　Fukuoka", 
	"sheet": 
	[{"c_1":"14075","c_2":"別府","c_3":"Beppu"},{"c_1":"14076","c_2":"大分","c_3":"Oita"},{"c_1":"14077","c_2":"佐賀関","c_3":"Saganoseki"},{"c_1":"14085","c_2":"宮原","c_3":"Miyanoharu"},{"c_1":"14086","c_2":"久住","c_3":"Kuju"},{"c_1":"14087","c_2":"犬飼","c_3":"Inukai"},{"c_1":"14088","c_2":"臼杵","c_3":"Usuki"}]
	},
	{ "district": "鹿児島　Kagoshima", 
	"sheet": [{"c_1":"15023","c_2":"竹田","c_3":"Taketa"},{"c_1":"15025","c_2":"佐伯","c_3":"Saiki"},{"c_1":"15033","c_2":"三田井","c_3":"Mitai"},{"c_1":"15035","c_2":"蒲江","c_3":"Kamae"},{"c_1":"15042","c_2":"鞍岡","c_3":"Kuraoka"},{"c_1":"15043","c_2":"諸塚山","c_3":"Morotsuka yama"},{"c_1":"15044","c_2":"延岡","c_3":"Nobeoka"},{"c_1":"15051","c_2":"椎葉村","c_3":"Shiibamura"},{"c_1":"15052","c_2":"神門","c_3":"Mikado"},{"c_1":"15053","c_2":"富高","c_3":"Tomitaka"},{"c_1":"15059","c_2":"村所","c_3":"Murasho"},{"c_1":"15060","c_2":"尾鈴山","c_3":"Osuzu yama"},{"c_1":"15061","c_2":"都農","c_3":"Tsuno"},{"c_1":"15068","c_2":"妻及び高鍋","c_3":"Tsuma & Takanabe"},{"c_1":"15075","c_2":"野尻","c_3":"Nojiri"},{"c_1":"15076","c_2":"宮崎","c_3":"Miyazaki"},{"c_1":"15083","c_2":"都城","c_3":"Miyakonojo"},{"c_1":"15084","c_2":"日向青島","c_3":"Hyuga-aoshima"},{"c_1":"15090","c_2":"末吉","c_3":"Sueyoshi"},{"c_1":"15091","c_2":"飫肥","c_3":"Obi"},{"c_1":"15096","c_2":"志布志","c_3":"Shibushi"},{"c_1":"15097","c_2":"都井岬","c_3":"Toino misaki"}]
	}
	];
				// 図幅の選択
function mapSelect() {
	var legendGroup = document.getElementById('legend_group');
	legendGroup.innerHTML = '';
	var legendGraphic = document.getElementById('legend_disp');
	legendGraphic.innerHTML = '';
	var seamless_ver = document.getElementById('seamless-version')
	seamless_ver.selectedIndex =0;
	
	var obj = document.f_map_select.sheet_select;
	var index = obj.selectedIndex;
	var map_no = obj.options[index].value;
	var map_No = Number(map_no);
	var url_no = [];
	url_no[map_No] = 'https://gbank.gsj.jp/ows/geologicmap50k_' + map_no;
				// 5万分の1地質図幅のサービスアドレス

				// 図幅中央の緯度経度をCapailitiesから取得
	var center_x;
	var center_y;
	$(function(){
		var data_1 = $.get(url_no[map_No],{
			service: "wms", request: "getcapabilities"
		},
		function(data, textStatus){
		}, "xml");
		$.when(data_1)
			.done(function(data_capabilities){
				function xmlToJson(xml) {
					var obj = {};
					if (xml.nodeType == 1) {
						if (xml.attributes.length > 0) {
							for (var j = 0; j < xml.attributes.length; j++) {
								var attribute = xml.attributes.item(j);
								obj[attribute.nodeName] = attribute.nodeValue;
							}
						}
					} else if (xml.nodeType == 3) {
						obj = xml.nodeValue.trim();
					}
					if (xml.hasChildNodes()) {
						for(var i = 0; i < xml.childNodes.length; i++) {
							var item = xml.childNodes.item(i);
							var nodeName = item.nodeName;
							if (typeof(obj[nodeName]) == "undefined") {
								var tmp = xmlToJson(item);
								if(tmp != "")
									obj[nodeName] = tmp;
							} else {
								if (typeof(obj[nodeName].push) == "undefined") {
									var old = obj[nodeName];
									obj[nodeName] = [];
									obj[nodeName].push(old);
								}
								var tmp = xmlToJson(item);
								if(tmp != "")
									obj[nodeName].push(tmp);
							}
						}
					}
					return obj;
				};

				var document_obj = xmlToJson(data_capabilities);
				var document_data_lonlan = document_obj['WMS_Capabilities']['Capability']['Layer']['EX_GeographicBoundingBox'];
				var min_x = Number(document_data_lonlan['southBoundLatitude']['#text']);
				var max_x = Number(document_data_lonlan['northBoundLatitude']['#text']);
				var min_y = Number(document_data_lonlan['westBoundLongitude']['#text']);
				var max_y = Number(document_data_lonlan['eastBoundLongitude']['#text']);
				center_x = (min_x + max_x)/2;
				center_y = (min_y + max_y)/2;

				var document_layers = new Array();
				document_layers[0] = new Array();
				document_layers[1] = new Array();
				var document_data_layers= document_obj['WMS_Capabilities']['Capability']['Layer']['Layer'];
				for (i =0; i < document_data_layers.length; i++)  {
					document_layers[0][i] = document_data_layers[i]['Name']['#text'];	//レイヤーの名称
					document_layers[1][i] = document_data_layers[i]['Title']['#text'];	//イヤーの説明
				}
				var document_data_mapname = document_obj['WMS_Capabilities']['Service']['KeywordList']['Keyword'][2]['#text'];
				var document_data_abstract = document_obj['WMS_Capabilities']['Capability']['Layer']['Abstract']['#text'];

				var map_name= document_layers[0];
				var map_abstract =document_layers[1];
				var selectionList_polygon = ['geo_A', 'ol1_A', 'ol2_A', 'ol3_A', 'ol4_A', 'ol5_A', 'ol6_A', 'ol7_A'];	// ポリゴンの並び
				var selectionList_line_point = ['geo_L', 'gfd', 'ol1', 'ol1_L', 'ol2', 'ol2_L', 'ol3', 'ol3_L', 'ol4', 'ol4_L', 'ol5', 'ol5_L', 'ol6', 'ol6_L', 'ol7', 'ol7_L', 'sec', 'pnt', 'strdip'];	// ラインとポイントの並び
				var selectionList_label = ['geo_A_label', 'ol1_A_label', 'ol2_A_label', 'ol3_A_label'];	//ラベルの並び(注　'geo_A_label'などにはメタ情報なし）
				var layers_polygon = new Array();	//図幅のpolygonレイヤーの構成
					layers_polygon[0] = new Array();	//レイヤーの名称
					layers_polygon[1] = new Array();	//レイヤーの説明
				for (var i = 0, j = 0; i < selectionList_polygon.length; i++) {
					var layer_name_index = map_name.indexOf(selectionList_polygon[i]);
					if (layer_name_index >= 0){
						layers_polygon[0][j] = selectionList_polygon[i];
						layers_polygon[1][j] = map_abstract[layer_name_index];
						j++;
					}
				}
				var layers_line_point = new Array();	//図幅のlineとpointレイヤーの構成
					layers_line_point[0] = new Array();
					layers_line_point[1] = new Array();
				for (var i = 0, j = 0; i < selectionList_line_point.length; i++) {
					var layer_name_index = map_name.indexOf(selectionList_line_point[i]);
					if (layer_name_index >= 0){
						layers_line_point[0][j] = selectionList_line_point[i];
						layers_line_point[1][j] = map_abstract[layer_name_index];
						j++;
					}
				}
				var layers_label = new Array();	//図幅のlabelレイヤーの構成
					layers_label[0] = new Array();
					layers_label[1] = new Array();
				for (var i = 0, j = 0; i < selectionList_label.length; i++) {
					var layer_name_index = map_name.indexOf(selectionList_label[i]);
					if (layer_name_index >= 0){
						layers_label[0][j] = selectionList_label[i];
						layers_label[1][j] = map_abstract[layer_name_index];
						j++;
					}
				}

				// ポリゴンの選択のプルダウン
$(function(){
	$("#select_polygon_layer").empty();
	$.each(layers_polygon[0], function(key, value) {
		if (value == 'geo_A') {
			$("#select_polygon_layer").append('<option value="' + value + '" selected>' + value + ' ' + layers_polygon[1][key] + '</option>');
		} else {
			$("#select_polygon_layer").append('<option value="' + value + '">' + value + ' ' + layers_polygon[1][key] + '</option>');  
		}
	});
});
		var layer_polygon_s0 = 'geo_A';
		var layer_polygon_s1 = '地質分布の面情報（ポリゴン）';
		var polygon_no = 0;
		var layers_list_0 = $.extend(true, [], layers_line_point);
		var layers_list = new Array();
		layers_list[0] = layers_list_0[0].concat(layers_label[0]);	//画面左のレイヤーリスト表示用　（除くポリゴン)
		layers_list[1] = layers_list_0[1].concat(layers_label[1]);
		var layers_disp_0 = $.extend(true, [], layers_line_point);
		var layers_disp_1 = new Array();
		layers_disp_1[0] = layers_polygon[0].concat(layers_disp_0[0]);
		layers_disp_1[1] = layers_polygon[1].concat(layers_disp_0[1]);
		var layers_disp = new Array();
		layers_disp[0] = layers_disp_1[0].concat(layers_label[0]);	//地図表示用
		layers_disp[1] = layers_disp_1[1].concat(layers_label[1]);
		var layers_meta = $.extend(true, [], layers_line_point);
		layers_meta[0].unshift(layer_polygon_s0);	//メタ情報取得用
		layers_meta[1].unshift(layer_polygon_s1);

			var disp_name_data = document.getElementById('disp_name');
			disp_name_data.innerHTML = document_data_mapname;	//図幅名称を地図画像の上方に表示
			var disp_abstract_data = document.getElementById('disp_abstract');
			var disp_abstract_data_1 = document_data_abstract;
			disp_abstract_data_1 = disp_abstract_data_1.replace(/[A-Za-z0-9]/g, function(s) {
				return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
			});
			disp_abstract_data.innerHTML = disp_abstract_data_1;	//図幅の説明を地図画像の上方に表示

			var layerComponents_list = document.getElementById('layer_components');	//構成レイヤー（ポリゴンレイヤーを除く）を画面左に表示　
			var layerComponents_list_disp = '';
			for (var i = 0; i < layers_list[0].length; i++) {
				layerComponents_list_disp = layerComponents_list_disp + '<b>' + layers_list[0][i] + ': </b> ' + layers_list[1][i] + '</br>';
			}
			layerComponents_list.innerHTML = layerComponents_list_disp;

			var container = document.getElementById('popup');
			var content = document.getElementById('popup-content');
			var closer = document.getElementById('popup-closer');
			var overlay = new ol.Overlay({
				element: container,
				autoPan: true,
				autoPanAnimation: {
				duration: 250
				}
			});
			closer.onclick = function() {
				overlay.setPosition(undefined);
				closer.blur();
				return false;
			};
			
			var layersAll = [];	//layersAll[0]：　地理地図, layersAll[1]～：　ポリゴン, 引き続きラインとポイント
			layersAll[0] = new ol.layer.Tile({
				source: new ol.source.XYZ({
					attributions: [
						new ol.Attribution({
							html: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
						})
					],
					url: "https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"
				})
			});
			var wmsSources = [];
			for (var i = 0; i < layers_disp[0].length -1; i++) {
				wmsSources[i] = new ol.source.ImageWMS({
					url: url_no[map_No],
					params: {layers: layers_disp[0][i], transparent: true, format: "image/png"}
				});
			}
			wmsSources[layers_disp[0].length -1] = new ol.source.ImageWMS({
				url: url_no[map_No],
				params: {layers: layers_disp[0][layers_disp[0].length -1], transparent: true, format: "image/png"},
				attributions: [
					new ol.Attribution({
						html: "<a href='https://www.gsj.jp/license/index.html' target='_blank'>Geological Survey of Japan, AIST</a>"		// 最後のレイヤーにAttributionを表示するために,このレイヤーのみ別に
					})
				]
			});
			document.getElementById('map').innerHTML = '';
			var view_1 = new ol.View({
				center: ol.proj.fromLonLat([center_y, center_x]),
				zoom: 12
			});
			for (var i = 0; i < layers_disp[0].length; i++) {
				layersAll[i+1] = new ol.layer.Image({
					source: wmsSources[i]
				});
			}

			for (var i = 0; i <layers_polygon[0].length;  i++) {
						if (i == 0) {
							layersAll[i+1].setVisible(true);
						} else {
							layersAll[i+1].setVisible(false);
						}
			}
				//ポリゴンレイヤーの選択
			var selected_polygon = document.getElementById('select_polygon_layer');
			selected_polygon.addEventListener('change', function() {
				polygon_no = selected_polygon.selectedIndex;
					for (var i = 0; i <layers_polygon[0].length;  i++) {
						if (i == polygon_no) {
							layersAll[i+1].setVisible(true);
						} else {
							layersAll[i+1].setVisible(false);
						}
					}
				layers_meta[0].shift();
				layers_meta[1].shift();
				layers_meta[0].unshift(layers_polygon[0][polygon_no]);
				layers_meta[1].unshift(layers_polygon[1][polygon_no]);
				map.render();
			});

				var map = new ol.Map({
					layers: layersAll,
					controls: ol.control.defaults().extend([
						new ol.control.ScaleLine()
					]),
					overlays: [overlay],
					target: 'map',
					view: view_1
				});	

				//レイヤー画像の複合化
				var select = document.getElementById('blend-mode');
				var setBlendModeFromSelect = function(evt) {
					evt.context.globalCompositeOperation = select.value;
				};
				var resetBlendModeFromSelect = function(evt) {
					evt.context.globalCompositeOperation = 'source-over';
				};
				var bindLayerListeners = function(layer) {
					layer.on('precompose', setBlendModeFromSelect);
					layer.on('postcompose', resetBlendModeFromSelect);
				};       
				var unbindLayerListeners = function(layer) {
					layer.un('precompose', setBlendModeFromSelect);
					layer.un('postcompose', resetBlendModeFromSelect);
				};
				select.addEventListener('change', function() {
				map.render();
				});
				for (i = 0; i < layersAll.length; i++) {
					bindLayerListeners(layersAll[i]);
				}

				var urlsAll = [];
				var url_seamless = 'https://gbank.gsj.jp/ows/seamlessgeology200k_b';
				var setSeamlessVer = document.getElementById('seamless-version');
				setSeamlessVer.addEventListener('change', function() {
					var seamless_version  = setSeamlessVer.selectedIndex;
					if (setSeamlessVer.options[seamless_version].value == "basic_version") {
						url_seamless = 'https://gbank.gsj.jp/ows/seamlessgeology200k_b';
					} else if (setSeamlessVer.options[seamless_version].value == "detailed_version") {
						url_seamless = 'https://gbank.gsj.jp/ows/seamlessgeology200k_d';
					}
				});

			map.on('singleclick', function(evt) {
				document.getElementById('info').innerHTML = '';
				var evt_coordinate = evt.coordinate;
				var coordinate_lonlan = ol.proj.toLonLat(evt_coordinate);
				var viewResolution = view_1.getResolution();
				urlsAll[0] = 'https://cyberjapandata2.gsi.go.jp/general/dem/scripts/getelevation.php?lon=' + coordinate_lonlan[0] + '&lat=' + coordinate_lonlan[1] + '&outtype=JSON';	//標高取得

				var wmsSource_200k = new ol.source.ImageWMS({
					url: url_seamless,
					params: {layers: "area", transparent: true, format: "image/png"},
					attributions: [
							new ol.Attribution({
								html: "<a href='https://www.gsj.jp/license/index.html' target='_blank'> Geological Survey of Japan, AIST</a>"
							})
						]
				});
				urlsAll[1] = wmsSource_200k.getGetFeatureInfoUrl(evt.coordinate, viewResolution, 'EPSG:3857',
				{'INFO_FORMAT': 'text/html', 'QUERY_LAYERS': 'area'});
					
				var wmsSources_2 = $.extend(true, [], wmsSources);
				for (var i = 0, j = 0; i < layers_polygon[0].length; i++){
					if (i == polygon_no) {
						j++;
					} else {
						wmsSources_2.slice(j, 1);
					}
				}
				for (i = 0; i < layers_meta[0].length +1; i++) {
					urlsAll[i+2] = wmsSources_2[i].getGetFeatureInfoUrl(
						evt_coordinate, viewResolution, 'EPSG:3857',
						{'INFO_FORMAT': 'text/html', 'QUERY_LAYERS': layers_meta[0][i]}
					);
				}
					//メタ情報の取得
				var legend_disp_no;
				$(function(){
					var data_layer = [];
					data_layer[0] = $.getJSON(urlsAll[0]);
					var data_layer_results = new Array(layers_meta[0].length + 2);
					var data_layer_meta = [];
					for (var i = 1; i <urlsAll.length; i++) {
						dfd = $.get(urlsAll[i]);
						data_layer.push(dfd);
					}
					$.when.apply($, data_layer)
						.done(function(){
							data_layer_results  = arguments;
							var metadata = '';
								for (var i = data_layer_results.length -2; i > 1; i--) {
								if (data_layer_results[i][0] !== ""){
									metadata = data_layer_results[i][0];
									legend_disp_no = i;
									break;
								}
							}
							var elevation_m = data_layer_results[0][0]['elevation'];
							var metadata_200k = data_layer_results[1][0];
							if (metadata_200k !== "") {
								metadata_200k = data_layer_results[1][0].replace("border=\"2\"","id=\"seamless_table\"").replace("th", "th width=\"60\"").replace(/center/g, "left");
							} else {
								metadata_200k = "<p class = \"meta_2\">この拡大率ではメタ情報は表示されません。<br>表示を縮小してみてください。<br>なお、水域などでメタ情報が登録されていない場合があります。</p>";
							}
							console.log(metadata, metadata_200k);
							content.innerHTML = '<p>経度: ' + coordinate_lonlan[0].toFixed(4) + '　緯度: ' + coordinate_lonlan[1].toFixed(4)+'　標高: '+ elevation_m + ' m　</p><code>' + metadata + '</code>' + '<p class = "meta_2">【参考情報】　20万分の1日本シームレス地質図</p><code>' + metadata_200k + '</code>';
							overlay.setPosition(evt_coordinate);
							if (legend_disp_no !== undefined){
								var url_legendGraphic = 'https://gbank.gsj.jp/ows/geologicmap50k_' + map_no + '?version=1.3.0&request=GetLegendGraphic&sld_version=1.1.0&format=image/png&STYLE=default&layer=' + layers_meta[0][legend_disp_no -2];
								legendGroup.innerHTML = '<b>' + layers_meta[0][legend_disp_no -2] + ': </b>' + layers_meta[1][legend_disp_no -2];
								legendGraphic.innerHTML = '<img src=' + url_legendGraphic + '></img>';
							}
						})
						.fail(function(){
							window.alert('メタ情報が取得できませんでした');
						});
				})
			});
		})
		.fail(function(data_capabilities){
			window.alert('図幅が配信サービスされておりません');
		});
	});
}
