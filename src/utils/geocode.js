const request=require('request')
const locat=(address , callback)=>{
	const ur='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic25laGl0YmF0cmExMjUiLCJhIjoiY2tocmczM2piMGlwbDJxcGJkdzF2MGdtbiJ9.kebLkJQnPpBHjrmpKWVeUg&limit=1'
  request({url:ur , json:true} ,  (error , response)=> {if(error)  {callback('hello network is not working', undefined) }
	  else if(response.body.features.length === 0){ callback(' bad search' ,  undefined)}
	  
	  else callback(undefined  ,  {  latitude:response.body.features[0].center[1] ,
                  
	 longitude:response.body.features[0].center[0]  ,
	 location:response.body.features[0].place_name
} )}  ) } 

module.exports=locat