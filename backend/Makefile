.PHONY: run
run:
	python3 app.py

.PHONY: test
test:
	python3 -m unittest discover -s tests

.PHONY: clean
clean:
	rm -rf __pycache__ tests/__pycache__ tests/*.pyc
	rm -rf */__pycache__ */*.pyc
