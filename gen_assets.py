from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

OUT = "public"; ICONS = os.path.join(OUT, "icons")
os.makedirs(ICONS, exist_ok=True)

INK=(22,19,30); INK2=(32,26,46); EMBER=(214,69,15); EMBER_HI=(240,110,40)
GOLD=(220,164,35); CREAM=(236,232,241)
FONT="/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_R="/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
TITLE="Pitmaster Log"

FLAME=[(0.50,0.06),(0.63,0.27),(0.565,0.40),(0.70,0.55),(0.725,0.72),
(0.62,0.89),(0.50,0.94),(0.38,0.89),(0.275,0.72),(0.345,0.55),(0.435,0.46),(0.40,0.29)]

def scaled(poly,size,cx=0.5,cy=0.52,scale=1.0,off=(0,0)):
    return [(( cx+(x-0.5)*scale)*size+off[0], (cy+(y-0.52)*scale)*size+off[1]) for x,y in poly]

def bg(size,radius=0.22,full=False):
    img=Image.new("RGBA",(size,size),(0,0,0,0)); d=ImageDraw.Draw(img)
    for y in range(size):
        t=y/size
        d.line([(0,y),(size,y)],fill=(int(INK[0]+(INK2[0]-INK[0])*t),int(INK[1]+(INK2[1]-INK[1])*t),int(INK[2]+(INK2[2]-INK[2])*t),255))
    if not full:
        m=Image.new("L",(size,size),0); ImageDraw.Draw(m).rounded_rectangle([0,0,size-1,size-1],radius=int(size*radius),fill=255); img.putalpha(m)
    return img

def flame(img,size,scale=1.0,off=(0,0)):
    d=ImageDraw.Draw(img)
    d.polygon(scaled(FLAME,size,scale=scale,off=off),fill=EMBER+(255,))
    d.polygon(scaled(FLAME,size,scale=scale*0.62,off=(off[0],off[1]+size*0.06*scale)),fill=GOLD+(255,))

def icon(size,fname,full=False,fs=0.86):
    img=bg(size,full=full); flame(img,size,scale=fs); img.save(os.path.join(ICONS,fname)); print("wrote",fname)

icon(192,"icon-192.png",fs=0.86); icon(512,"icon-512.png",fs=0.86)
icon(512,"maskable-512.png",full=True,fs=0.6); icon(180,"apple-touch-icon.png",full=True,fs=0.84)

fav=bg(64,full=True); flame(fav,64,scale=0.9); fav.save(os.path.join(OUT,"favicon.ico"),sizes=[(16,16),(32,32),(48,48)]); print("favicon")

# OG 1200x630
W,H=1200,630
og=Image.new("RGBA",(W,H),INK+(255,)); d=ImageDraw.Draw(og)
for y in range(H):
    t=y/H
    d.line([(0,y),(W,y)],fill=(int(INK[0]+(INK2[0]-INK[0])*t),int(INK[1]+(INK2[1]-INK[1])*t),int(INK[2]+(INK2[2]-INK[2])*t),255))
glow=Image.new("RGBA",(W,H),(0,0,0,0)); ImageDraw.Draw(glow).ellipse([W-520,-260,W+160,420],fill=EMBER+(70,))
og.alpha_composite(glow.filter(ImageFilter.GaussianBlur(120)))
fi=Image.new("RGBA",(260,260),(0,0,0,0)); flame(fi,260,scale=0.95); og.alpha_composite(fi,(96,150))

# auto-fit title within available width
maxw = W - 400 - 48
size = 100
while size > 44:
    f_title = ImageFont.truetype(FONT, size)
    if d.textlength(TITLE, font=f_title) <= maxw: break
    size -= 2
f_tag=ImageFont.truetype(FONT_R,38); f_kick=ImageFont.truetype(FONT,30)
d.text((400,178),TITLE,font=f_title,fill=CREAM)
d.text((404,292),"The free BBQ cook log",font=f_tag,fill=(200,192,205))
d.text((404,340),"& pitmaster's toolkit",font=f_tag,fill=(200,192,205))
d.text((404,422),"LOG · PLAN · NAIL IT NEXT TIME",font=f_kick,fill=EMBER_HI)
og.convert("RGB").save(os.path.join(OUT,"og.png"),quality=90); print("og.png title size",size)

with open(os.path.join(OUT,"ads.txt"),"w") as f:
    f.write("# Add your AdSense line after approval, e.g.:\n# google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0\n")
print("DONE")
