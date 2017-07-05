import time

test = "Hello, my name is Tyler McKean."
words = len(test.split())


starttime = time.time()

user_type = raw_input(test + "\n")

endtime = time.time()


elapsedTime = endtime - starttime
elapsedString = "{0:.2f}".format(elapsedTime)
wpm = (words/(elapsedTime/60))




if user_type == test:

	print "You typed the phrase in {0} seconds and at a speed of {1} WPM!".format(elapsedString, wpm)

else:
	print "You failed to type the correct phrase!"
