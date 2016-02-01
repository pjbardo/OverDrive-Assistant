function genericOnClick(info, tab) {
	var re = new RegExp("[=/{]([a-fA-F0-9]+-[a-fA-F0-9]+-[a-fA-F0-9]+-[a-fA-F0-9]+-[a-fA-F0-9]+)(&|}|-|$)");
	var m = re.exec(info.linkUrl);
	//alert(m[1]);
	if (m !== null) {
		window.open("http://overdrive.slcl.org/900BD9C9-CE92-4A04-89E0-B00DCCE2387B/10/380/en/ContentDetails.htm?ID=" + m[1]);
		window.open("http://overdrive.mlcstl.org/DC892527-E8EA-4D5C-A5EC-E319E1143B0A/10/504/en/ContentDetails.htm?ID=" + m[1]);
		window.open("http://overdrive.youranswerplace.org/798AFB58-96F8-4572-884A-F62B72057851/10/494/en/ContentDetails.htm?ID=" + m[1]);
		window.open("http://getitnow.slpl.org/635A00D7-1039-4E5A-8DEA-A4F31185E56E/10/506/en/ContentDetails.htm?ID=" + m[1]);
		//
		//window.open("http://mcpl.lib.overdrive.com/C9C88BDD-772D-45BE-84F1-8A837FDE635F/10/521/en/ContentDetails.htm?id=" + m[1]);
		//window.open("http://molib2go.lib.overdrive.com/4829ACEA-AD57-4B4B-A554-C3F249E33E00/10/681/en/ContentDetails.htm?id=" + m[1]);
		//window.open("http://kclibrary.lib.overdrive.com/FECDA6BC-309F-4CC2-B075-F5ADF9D5D732/10/524/en/ContentDetails.htm?ID=" + m[1]);
		//window.open("http://ebooks.tscpl.org/45010F1D-5767-4D93-B43A-8E58269A8D01/10/872/en/ContentDetails.htm?id=" + m[1]);
		//window.open("http://wichita.lib.overdrive.com/21B2441A-8E57-48DC-A871-E05AA0B08CC4/10/871/en/ContentDetails.htm?id=" + m[1]);
		//
		//window.open("http://emedia.clevnet.org/31808DDB-FD9F-4265-88DB-C53D0D79BB0A/10/288/en/ContentDetails.htm?id=" + m[1]);
		//window.open("http://navy.lib.overdrive.com/6AFA1231-B7A4-447D-8E09-21E73E4266B0/10/393/en/ContentDetails.htm?ID=" + m[1]);
		//window.open("http://overdrive.phoenixpubliclibrary.org/F4706ED8-974E-40D8-BEBE-7778AE8C0059/10/288/en/ContentDetails.htm?id=" + m[1]);
		//window.open("http://austinlibrary.lib.overdrive.com/9BD71C60-1C6A-4DE7-88BF-BCB25F0046A1/10/845/en/ContentDetails.htm?id=" + m[1]);
		//window.open("http://hadc.lib.overdrive.com/0D7C241B-4D7C-4BD9-988A-DB2D380826A3/10/474/en/ContentDetails.htm?id=" + m[1]);
		//chrome.tabs.query({url: "*slcl.org*"},function(tab){console.log(tab);});
		//chrome.tabs.update(first, {selected: true});
	}
}

var title = "Search for book";
var id = chrome.contextMenus.create(
	{
		"title": title, 
		"contexts":["link"],
		"onclick": genericOnClick
	}
);