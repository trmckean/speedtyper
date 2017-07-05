import time

print "Hello and welcome to SpeedTyper!"
ready = False

while not ready:
	userReady = raw_input("Please type 'ready' when you want to begin\n")
	ready = (userReady == 'ready')


test = "Hello, my name is Tyler McKean."
words = len(test.split())

print "Get ready to type in the phrase when it appears in 5 seconds!"

for i in range(5):
	print 5 - i
	time.sleep(1)

starttime = time.time()
user_type = raw_input(test + "\n" + "Your input: \n")
endtime = time.time()

elapsedTime = endtime - starttime
elapsedString = "{0:.2f}".format(elapsedTime)
wpm = "{0:.2f}".format(words/(elapsedTime/60))

if user_type == test:
	print "You typed the phrase in {0} seconds at a speed of {1} WPM!".format(elapsedString, wpm)
else:
	print "You failed to type the correct phrase!"
