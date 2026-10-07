import re

with open('src/components/waitlist.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'<Button type="submit".*?</Button>', re.DOTALL)
replacement = '''<Magnetic intensity={0.1}>
                <Button type="submit" size="lg" className="w-full" isLoading={submitStatus === "loading"}>
                  Join the waitlist ➔
                </Button>
              </Magnetic>'''

content = pattern.sub(replacement, content)

with open('src/components/waitlist.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
