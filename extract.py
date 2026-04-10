import codecs
from pypdf import PdfReader

reader = PdfReader('C:/Users/omnam/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/311E76DF0FBF363D9D656A661F28A29588D4777A/transfers/2026-15/Resume.OM.pdf')
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"

with codecs.open('resume.txt', 'w', 'utf-8') as f:
    f.write(text)
