function make(){

		partSpace=1

		dxf = "0\nSECTION\n2\nENTITIES\n999\nw4rd.com\n0\n"

		//top

		//62 color

		//1 red
		//2 yellow
		//3 green
		//4 cyan
		//5 blue
		//6 magenta

		dxf+="TABLES\n0\nTABLE\n2\n"

		//layers

		/*

		dxf+="LAYER\n2\nCUTOUT\n70\n0\n62\n7\n6\n"

		dxf+="ENDTAB\n0\nENDSEC\n0\n"

		*/

		dxf+="POLYLINE\n8\n0\n70\n1\n0\n"

		for(i=0;i<tableTop.cutout.length;i++){
			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= tableTop.cutout[i].X.toFixed(3) + "\n20\n"
			dxf+= tableTop.cutout[i].Y.toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n8\n0\n10\n"
		dxf+= tableTop.cutout[0].X.toFixed(3) + "\n20\n"
		dxf+= tableTop.cutout[0].Y.toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"
		

		for(i=0;i<tableTop.pockets.length;i++){
			dxf+="POLYLINE\n8\n0\n62\n6\n70\n1\n0\n"
			for(j=0;j<tableTop.pockets[i].length;j++){			
				dxf+="VERTEX\n8\n0\n10\n"
				dxf+= tableTop.pockets[i][j].X.toFixed(3) + "\n20\n"
				dxf+= tableTop.pockets[i][j].Y.toFixed(3) + "\n0\n"
			}

			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= tableTop.pockets[i][0].X.toFixed(3) + "\n20\n"
			dxf+= tableTop.pockets[i][0].Y.toFixed(3) + "\n0\n"
			dxf+="SEQEND\n0\n"
		}

		//front support
		dxf+="POLYLINE\n8\n0\n70\n1\n0\n"
		for(i=0;i<tableSupportFront.cutout.length;i++){
			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= tableSupportFront.cutout[i].X.toFixed(3) + "\n20\n"
			dxf+= (tableSupportFront.cutout[i].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n8\n0\n10\n"
		dxf+= tableSupportFront.cutout[0].X.toFixed(3) + "\n20\n"
		dxf+= (tableSupportFront.cutout[0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		for(i=0;i<tableSupportFront.holes.length;i++){
			dxf+="POLYLINE\n8\n0\n62\n5\n70\n1\n0\n"
			for(j=0;j<tableSupportFront.holes[i].length;j++){			
				dxf+="VERTEX\n8\n0\n10\n"
				dxf+= tableSupportFront.holes[i][j].X.toFixed(3) + "\n20\n"
				dxf+= (tableSupportFront.holes[i][j].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
			}

			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= tableSupportFront.holes[i][0].X.toFixed(3) + "\n20\n"
			dxf+= (tableSupportFront.holes[i][0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
			dxf+="SEQEND\n0\n"
		}


		//Side support
		dxf+="POLYLINE\n8\n0\n70\n1\n0\n"
		for(i=0;i<tableSupportSide.cutout.length;i++){
			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= (tableSupportSide.cutout[i].X-(table.width/2+table.supportWidth/2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= tableSupportSide.cutout[i].Y.toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n8\n0\n10\n"
		dxf+= (tableSupportSide.cutout[0].X-(table.width/2+table.supportWidth/2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= tableSupportSide.cutout[0].Y.toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		for(i=0;i<tableSupportSide.holes.length;i++){
			dxf+="POLYLINE\n8\n0\n62\n5\n70\n1\n0\n"
			for(j=0;j<tableSupportSide.holes[i].length;j++){			
				dxf+="VERTEX\n8\n0\n10\n"
				dxf+= (tableSupportSide.holes[i][j].X-(table.width/2+table.supportWidth/2+partSpace)).toFixed(3) + "\n20\n"
				dxf+= tableSupportSide.holes[i][j].Y.toFixed(3) + "\n0\n"
			}

			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= (tableSupportSide.holes[i][0].X-(table.width/2+table.supportWidth/2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= tableSupportSide.holes[i][0].Y.toFixed(3) + "\n0\n"
			dxf+="SEQEND\n0\n"
		}

		//Leg1
		dxf+="POLYLINE\n8\n0\n70\n1\n0\n"
		for(i=0;i<tableLeg1.cutout.length;i++){
			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= (tableLeg1.cutout[i].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= tableLeg1.cutout[i].Y.toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n8\n0\n10\n"
		dxf+= (tableLeg1.cutout[0].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= tableLeg1.cutout[0].Y.toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		for(i=0;i<tableLeg1.holes.length;i++){
			dxf+="POLYLINE\n8\n0\n62\n5\n70\n1\n0\n"
			for(j=0;j<tableLeg1.holes[i].length;j++){			
				dxf+="VERTEX\n8\n0\n10\n"
				dxf+= (tableLeg1.holes[i][j].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
				dxf+= tableLeg1.holes[i][j].Y.toFixed(3) + "\n0\n"
			}

			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= (tableLeg1.holes[i][0].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= tableLeg1.holes[i][0].Y.toFixed(3) + "\n0\n"
			dxf+="SEQEND\n0\n"
		}

		//Leg2
		dxf+="POLYLINE\n8\n0\n70\n1\n0\n"
		for(i=0;i<tableLeg2.cutout.length;i++){
			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= (tableLeg2.cutout[i].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= tableLeg2.cutout[i].Y.toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n8\n0\n10\n"
		dxf+= (tableLeg2.cutout[0].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= tableLeg2.cutout[0].Y.toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		for(i=0;i<tableLeg2.holes.length;i++){
			dxf+="POLYLINE\n8\n0\n62\n5\n70\n1\n0\n"
			for(j=0;j<tableLeg2.holes[i].length;j++){			
				dxf+="VERTEX\n8\n0\n10\n"
				dxf+= (tableLeg2.holes[i][j].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
				dxf+= tableLeg2.holes[i][j].Y.toFixed(3) + "\n0\n"
			}

			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= (tableLeg2.holes[i][0].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= tableLeg2.holes[i][0].Y.toFixed(3) + "\n0\n"
			dxf+="SEQEND\n0\n"
		}


		//Foot1
		dxf+="POLYLINE\n8\n0\n70\n1\n0\n"
		for(i=0;i<tableFoot1.cutout.length;i++){
			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= (tableFoot1.cutout[i].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= (tableFoot1.cutout[i].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n8\n0\n10\n"
		dxf+= (tableFoot1.cutout[0].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= (tableFoot1.cutout[0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"
		//

		dxf+="POLYLINE\n8\n0\n62\n5\n70\n1\n0\n"
		for(i=0;i<tableFoot1.holes[0].length;i++){
			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= (tableFoot1.holes[0][i].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= (tableFoot1.holes[0][i].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n8\n0\n10\n"
		dxf+= (tableFoot1.holes[0][0].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= (tableFoot1.holes[0][0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		//Foot2
		dxf+="POLYLINE\n8\n0\n70\n1\n0\n"
		for(i=0;i<tableFoot2.cutout.length;i++){
			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= (tableFoot2.cutout[i].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= (tableFoot2.cutout[i].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n8\n0\n10\n"
		dxf+= (tableFoot2.cutout[0].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= (tableFoot2.cutout[0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		dxf+="POLYLINE\n8\n0\n62\n5\n70\n1\n0\n"
		for(i=0;i<tableFoot2.holes[0].length;i++){
			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= (tableFoot2.holes[0][i].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= (tableFoot2.holes[0][i].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n8\n0\n10\n"
		dxf+= (tableFoot2.holes[0][0].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= (tableFoot2.holes[0][0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		//pockets
		dxf+="POLYLINE\n8\n0\n62\n1\n70\n1\n0\n"
		for(i=0;i<tableFoot2.pockets.length;i++){
			dxf+="VERTEX\n8\n0\n10\n"
			dxf+= (tableFoot2.pockets[i].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= (tableFoot2.pockets[i].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n8\n0\n10\n"
		dxf+= (tableFoot2.pockets[0].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= (tableFoot2.pockets[0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"


		//end
		dxf+="ENDSEC\n0\nEOF"

		var link = document.getElementById("downloadLink")

		link.setAttribute("href", "data:text/plain;base64," + btoa(dxf))
		link.setAttribute("download", "table.dxf")
		link.click()


}
