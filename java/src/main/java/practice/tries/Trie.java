package practice.tries;
/**
 * 208. Implement Trie (Prefix Tree) (Medium)
 *
 * Store words using these three operations:
 * - insert(word) stores a complete word. Repeated insertions are allowed.
 * - search(word) checks whether that exact word was inserted.
 * - startsWith(prefix) checks whether any stored word begins with prefix.
 *
 * All inputs are nonempty strings of lowercase English letters. A word
 * counts as a prefix of itself.
 *
 * After inserting "apple", search("apple") and startsWith("app") return
 * true, while search("app") returns false. Insert "app" and its exact
 * search also returns true.
 *
 * Aim for O(L) time per operation, where L is the argument length. */
public final class Trie {

	private static class TrieNode {
		TrieNode[] children = new TrieNode[26];
		boolean isWord;
	}

	private final TrieNode root = new TrieNode();

	public Trie() {}

    public void insert(String word) {
		TrieNode current = root;
		for (int i=0;i<word.length();i++){
			int index = getIndex(word, i);
			
			if (current.children[index] == null) {
				current.children[index] = new TrieNode();
			}
			current = current.children[index];
		}
		current.isWord = true;
    }

    public boolean search(String word) {
		TrieNode current = root;
        for(int i = 0;i<word.length();i++){
			int index = getIndex(word, i);
			if (current.children[index] == null) {
				return false;
			}
			current = current.children[index];
		}
		if (current.isWord) return true;

		return false;
    }

    public boolean startsWith(String prefix) {
		TrieNode current = root;
		for(int i = 0;i<prefix.length();i++){
			int index = getIndex(prefix, i);
			if (current.children[index] == null) {
				return false;
			}
			current = current.children[index];
		}
		return true;
    }

	private int getIndex(String word, int i) {
		return word.charAt(i) - 'a';
	}

	public void printTrie() {
		System.out.println("(root)");
		printNode(root, "");
	}

	private void printNode(TrieNode node, String indent) {
		for (int i = 0; i < 26; i++) {
			TrieNode child = node.children[i];

			if (child != null) {
				char ch = (char) ('a' + i);

				System.out.println(
						indent + "└── " + ch + (child.isWord ? " [word]" : "")
				);

				printNode(child, indent + "    ");
			}
		}
	}
}




